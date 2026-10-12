import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Exames {
  id: number;
  name: string;
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


  private http = inject(HttpClient);

  getExames(pagina: number): Observable<Exames[]> {
    return this.http.get<Exames[]>(`/api-fleury/api/exams-api?sort%5B0%5D=name%3Aasc&pagination%5Bpage%5D=${pagina}&pagination%5BpageSize%5D=12&populate=%2A`);
  }
}
