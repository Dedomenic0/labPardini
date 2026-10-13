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

  getPesquisa(pesquisa: string): Observable<Exames[]> {
    return this.http.get<Exames[]>(`/api-fleury/api/exams-api?sort%5B0%5D=name%3Aasc&filters%5B%24or%5D%5B0%5D%5Bname%5D%5B%24containsi%5D=${pesquisa}&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=9&populate=%2A`);
  }
}
