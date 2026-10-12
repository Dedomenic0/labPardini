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

  ngOnInit() {
    this.carregarExames();
  }

  carregarExames() {
    this.carregando = true;
    this.examesService.getExames(this.paginaAtual).subscribe((data: any) => {
      this.todosExames = data.data;
      this.paginaAtual = data.meta.pagination.page;
      this.totalPaginas = data.meta.pagination.pageCount;
      console.log(data.data);
      this.addExames();
    });
    this.carregando = false; 
  }

  addExames() {
      this.examesOriginal = this.todosExames.map((i: any) => {
        return {
          id: i.id,
          name: i.name,
          instrucoesGerais: i.json?.instrucoesGerais || []
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
  // 1. Filtra por texto digitado
  this.examesFiltrados = this.examesOriginal.filter(exame => {
    const nome = exame.name || exame.name || '';
    return nome.toLowerCase().includes(this.termoBusca.toLowerCase());
  });

  // 2. Calcula total de páginas
  this.totalPaginas = Math.ceil(this.examesFiltrados.length / this.itensPorPagina) || 1;

  // 3. Corta o array para exibir apenas os itens da página atual
  const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
  const fim = inicio + this.itensPorPagina;
  this.examesPaginados = this.examesFiltrados.slice(inicio, fim);
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
