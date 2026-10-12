import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Exames {
  id: number;
  nome: string;
  json: {
    instrucoesGerais: [
        {
            titulo: string;
            conteudo: string;
        }
    ]
  }
}

@Injectable({
  providedIn: 'root',
})
export class ExamesService {

    pagina: number = 1;

  private http = inject(HttpClient);
  private apiUrl = `https://cms.fleury.com.br/api/exams-api?sort%5B0%5D=name%3Aasc&pagination%5Bpage%5D=${this.pagina}&pagination%5BpageSize%5D=12&populate=%2A`;

  getExames(): Observable<Exames[]> {
    return this.http.get<Exames[]>(this.apiUrl);
  }
}
