import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../services/user';
import { Convenios } from '../convenios/convenios';
import { Cabecalho } from '../cabecalho/cabecalho';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, Convenios, Cabecalho],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private userService = inject(UserService);

  activeTab: 'paciente' | 'medico' | 'convenio' = 'paciente';

  // Dados do formulário de login
  chave: string = '';
  senha: string = '';

  // Histório do laboratório (Timeline)
  timelineEvents = [
    { year: '1948', title: 'Fundação', description: 'Início das atividades como laboratório de análises clínicas em Botucatu.' },
    { year: '1982', title: 'Expansão', description: 'A primeira sede própria é inaugurada a Rua Quintino Bocaiuva, 509, onde funciona até os dias atuais como posto de coleta.' },
    { year: '1998', title: 'Novas Técnicas', description: 'Uma nova unidade no interio do Hospital Misericórdia Botucatuense é inaugurada, que durante 12 anos serviu o próprio hospital, o Pronto atendimento e o Hospital Regional.' },
    { year: '2009', title: 'Expansão', description: 'É inaugurada a unidade na Avenida Dom Lúcio, trasendo mais conforto aos pacientes e modernização das instalações.' }
  ];

  

  onLogin() {
    console.log('Tentativa de login:', { tipo: this.activeTab, chave: this.chave });
    // Lógica de autenticação do laboratório
    
    const userData: User = {
      tbCodigo: this.chave,
      tbSenha: this.senha,
      _token: '', // Exemplo de valor, ajuste conforme necessário
      rdbOpcao: this.activeTab
    };
    this.userService.resultado(userData).subscribe(
      (response) => {
        
        const blob = new Blob([response], {
        type: 'text/html;charset=utf-8'
      });

        const url = URL.createObjectURL(blob);

        window.open(url, '_blank');

        setTimeout(() => URL.revokeObjectURL(url), 60000);
      },
      (error) => {
        console.error('Erro no login:', error);
        
        // Aqui você pode exibir uma mensagem de erro para o usuário.
      }
    );
  }
}
