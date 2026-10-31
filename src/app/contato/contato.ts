import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser'
import { MatIcon } from '@angular/material/icon';

declare let fbq: any;

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule, MatIcon],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  contatoForm!: FormGroup;
  mensagemEnviada: boolean = false;
  enviando: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?(9?\d{4})-?\d{4}$/)]],
      assunto: ['Dúvidas', Validators.required],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarMensagem(): void {
  if (this.contatoForm.valid) {
    this.enviando = true;

    emailjs.send(
      'service_6h8v2yh',
      'template_h0o51aj',
      this.contatoForm.value, // O EmailJS lê as chaves do seu FormGroup automaticamente
      'OsGTsowLR09uSAnbZ'
    )
    .then((resultado) => {
      this.mensagemEnviada = true;
      this.enviando = false;
      this.contatoForm.reset({ assunto: 'Dúvidas' });

      if (typeof fbq !== 'undefined') {
          fbq('track', 'Lead');
        }

      setTimeout(() => {
        this.mensagemEnviada = false;
      }, 5000);
    })
    .catch((erro) => {
      this.enviando = false;
      alert('Ocorreu um erro ao enviar.');
    });
  }
}
}
