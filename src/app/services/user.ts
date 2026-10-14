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
  //private apiUrl = 'https://portal.worklabweb.com.br/resultados-on-line/1122';
  private apiUrl = 'https://portal.worklabweb.com.br/resultados-on-line/3602';

  // Retorna um Observable com a lista de usuários
  resultado(data: User): Observable<any> {

    const formData = new FormData();
    formData.append('_token', data._token);
    formData.append('tbCodigo', data.tbCodigo);
    formData.append('tbSenha', data.tbSenha);
    formData.append('rdbOpcao', data.rdbOpcao);

    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
}
