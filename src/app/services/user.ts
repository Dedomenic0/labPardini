import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  tbCodigo: string;
  tbSenha: string;
  tbDtaNascimentoShow: number;
  rdbOpcao: 'paciente' | 'medico' | 'convenio';
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://portal.worklabweb.com.br/resultados-on-line/1122';

  // Retorna um Observable com a lista de usuários
  resultado(data: User): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
