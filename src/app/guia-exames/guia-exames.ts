import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Exames, ExamesService } from '../services/exames';
import { Cabecalho } from '../cabecalho/cabecalho';

@Component({
  selector: 'app-guia-exames',
  imports: [CommonModule, Cabecalho],
  templateUrl: './guia-exames.html',
  styleUrl: './guia-exames.scss',
})
export class GuiaExames {
  private examesService = inject(ExamesService);

  termoBusca: string = '';
  todosExames: any[] = [];        // Todos os exames carregados da API
  examesOriginal: any[] = [];     // Dados brutos vindos da API
  examesFiltrados: any[] = [];    // Dados após aplicar o filtro de busca
  examesPaginados: any[] = [];    // Dados exibidos na página atual
  carregando: boolean = false;

  paginaAtual: number = 1;
  itensPorPagina: number = 12;
  totalPaginas: number = 1;

  prazo: number = 0;

  ngOnInit() {
    this.carregarExames();
  }

  carregarExames() {
    this.carregando = true;
    this.examesService.getExames(this.paginaAtual).subscribe((data: any) => {
      this.todosExames = data.data;
      this.paginaAtual = data.meta.pagination.page;
      this.totalPaginas = data.meta.pagination.pageCount;
      this.addExames();
    });
    this.carregando = false; 
  }

  addExames() {
      this.examesOriginal = this.todosExames.map((i: any) => {
        return {
          id: i.id,
          name: i.name,
          jejum: i.json?.instrucoesGerais?.find((instrucao: any) => instrucao.titulo === 'Jejum')?.conteudo || 'Não necessita jejum',
          prazo: i.json?.instrucoesGerais?.find((instrucao: any) => instrucao.titulo === 'Prazo de Entrega')?.conteudo || ''
        };
      });
      this.examesFiltrados = [...this.examesOriginal];
      this.examesPaginados = [...this.examesOriginal]

      console.log(this.examesOriginal);
      
    }

onPesquisar() {
  this.paginaAtual = 1;
  this.aplicarFiltrosEPaginacao();
}

limparBusca() {
  this.termoBusca = '';
  this.onPesquisar();
}

aplicarFiltrosEPaginacao() {

  this.examesService.getPesquisa(this.termoBusca).subscribe((data: any) => {
    this.todosExames = data.data;
    this.paginaAtual = data.meta.pagination.page;
    this.totalPaginas = data.meta.pagination.pageCount;
    this.addExames();
  });

}

mudarPagina(novaPagina: number) {
  if (novaPagina >= 1 && novaPagina <= this.totalPaginas) {
    this.paginaAtual = novaPagina;
    this.carregarExames(); // Carrega os exames da nova página
    this.aplicarFiltrosEPaginacao();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo ao mudar de página
  }
}
}
