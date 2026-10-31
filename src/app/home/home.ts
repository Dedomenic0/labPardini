import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { User, UserService } from '../services/user';
import { InfoComplementares } from '../info-complementares/info-complementares';
import { Convenios } from '../convenios/convenios';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, Convenios, InfoComplementares, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private userService = inject(UserService);

  activeTab: 'paciente' | 'medico' | 'convenio' = 'paciente';

  acessoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.acessoForm = this.fb.group({  
      chave: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onLogin() {
    const userData: User = {
      tbCodigo: this.acessoForm.get('chave')?.value,
      tbSenha: this.acessoForm.get('senha')?.value,
      _token: '',
      rdbOpcao: this.activeTab
    };

    this.userService.abrirResultados(userData);
    this.acessoForm.reset();
  }
}
