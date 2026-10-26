import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  tbCodigo: string;
  tbSenha: string;
  _token: string;
  rdbOpcao: 'paciente' | 'medico' | 'convenio';
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://portal.worklabweb.com.br/resultados-on-line/1122';
 
  abrirResultados(data: User): void {
  const form = document.createElement('form');

  const formData = new FormData();
    formData.append('_token', data._token);
    formData.append('tbCodigo', data.tbCodigo);
    formData.append('tbSenha', data.tbSenha);
    formData.append('rdbOpcao', data.rdbOpcao);

  form.method = 'POST';
  form.action = this.apiUrl;
  form.target = '_blank';
  form.enctype = 'multipart/form-data';

  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      const input = document.createElement('input');

      input.type = 'hidden';
      input.name = key;
      input.value = value;

      form.appendChild(input);
    }
  });

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

  abreWhatsApp(): void {
    const phoneNumber = '5514996001735';
    const message = 'Olá, gostaria de agendar uma coleta domiciliar.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
}
