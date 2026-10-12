import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-convenios',
  imports: [CommonModule],
  templateUrl: './convenios.html',
  styleUrl: './convenios.scss',
})
export class Convenios {
  conveniosList = [
    { name: 'Unimed', logo: 'convenios/01.png' },
    { name: 'Prever', logo: 'convenios/02.png' },
    { name: 'Solucard', logo: 'convenios/04.png' },
    { name: 'Cassi', logo: 'convenios/05.png' },
    { name: 'Cabesp', logo: 'convenios/06.png' },
    { name: 'Itau Saúde', logo: 'convenios/marca.svg' },
    { name: 'Porto Saúde', logo: 'convenios/porto-saude-seeklogo.svg' }
  ];

  examesColuna1 = [
    'Hematologia',
    'Coagulograma',
    'Bioquímica',
    'Imunologia',
    'Parasitologia',
    'Espermograma',
    'Microbiologia'
  ];

  examesColuna2 = [
    'Uroanálise',
    'Análise de cálculo renal',
    'Exames ocupacionais',
    'Testes toxicológicos (Credenciado Detran)',
    'Testes de DNA',
    'Biologia molecular'
  ];
}
