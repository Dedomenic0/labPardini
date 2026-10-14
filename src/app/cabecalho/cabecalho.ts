import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho {
  resultado() {
    window.open('https://portal.worklabweb.com.br/resultados-on-line/1122');
  }

 menuAberto: boolean = false;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}
