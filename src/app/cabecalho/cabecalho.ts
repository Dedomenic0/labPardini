import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho {
  resultado() {
    window.open('https://portal.worklabweb.com.br/resultados-on-line/1122');
  }
}
