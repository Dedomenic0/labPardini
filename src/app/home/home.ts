import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../services/user';
import { Convenios } from '../convenios/convenios';
import { Cabecalho } from '../cabecalho/cabecalho';
import { InfoComplementares } from '../info-complementares/info-complementares';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, Convenios, Cabecalho, InfoComplementares, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private userService = inject(UserService);

  activeTab: 'paciente' | 'medico' | 'convenio' = 'paciente';

  // Dados do formulário de login
  chave: string = '';
  senha: string = '';

  onLogin() {
    const userData: User = {
      tbCodigo: this.chave,
      tbSenha: this.senha,
      _token: '',
      rdbOpcao: this.activeTab
    };

    this.userService.abrirResultados(userData);
  }
}
