import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-convenios',
  imports: [CommonModule, RouterLink],
  templateUrl: './convenios.html',
  styleUrl: './convenios.scss',
})
export class Convenios {
  conveniosList = [
    { name: 'Unimed', logo: 'convenios/01.png' },
    { name: 'Prever', logo: 'convenios/02.png' },
    { name: 'sim-sinam', logo: 'convenios/sim-sinam.webp' },
    { name: 'Cassi', logo: 'convenios/05.png' },
    { name: 'Cabesp', logo: 'convenios/06.png' },
    { name: 'Itau Saúde', logo: 'convenios/marca.svg' },
    { name: 'Porto Saúde', logo: 'convenios/porto-saude-seeklogo.svg' },
    { name: 'apas-botucatu', logo: 'convenios/apas-logo.png' },
  ];

  examesColuna1 = [
    'Hemograma completo',
    'Reticulócitos',
    'hemoglobina'
  ];

  examesColuna2 = [
    'Glicose',
    'Colesterol total e suas frações',
    'Triglicerídeos',

  ];

  examesColuna3 = [
    'TSH',
    'T4 livre',
    'T3 total',
    'PSA'
  ]

  examesColuna4 = [
    'Teste de gravidez',
    'Testes de DSTs',
    'Sorologia para hepatites',
  ]

  examesColuna5 = [
    'Uroanalise',
    'Testes de DNA',
    "Exames toxicológicos",
    'Parasitologia'
  ]
}
