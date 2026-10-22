import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cabecalho } from '../cabecalho/cabecalho';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule, Cabecalho, Footer],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  contatoForm!: FormGroup;
  mensagemEnviada: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      assunto: ['duvida', Validators.required],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarMensagem(): void {
    if (this.contatoForm.valid) {
      console.log('Dados do formulário:', this.contatoForm.value);
      
      // Aqui você integraria com sua API de envio de e-mail no futuro.
      // Por enquanto, simulamos o sucesso:
      this.mensagemEnviada = true;
      this.contatoForm.reset({ assunto: 'duvida' });

      // Esconde a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        this.mensagemEnviada = false;
      }, 5000);
    } else {
      // Força a exibição dos erros se o usuário tentar enviar vazio
      Object.keys(this.contatoForm.controls).forEach(campo => {
        const controle = this.contatoForm.get(campo);
        controle?.markAsTouched();
      });
    }
  }
}
