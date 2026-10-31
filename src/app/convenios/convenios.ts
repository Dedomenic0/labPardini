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
    { name: 'Unimed', logo: 'convenios/01.webp' },
    { name: 'Prever', logo: 'convenios/02.webp' },
    { name: 'Sim Sinam', logo: 'convenios/sim-sinam.webp' },
    { name: 'Cassi', logo: 'convenios/05.webp' },
    { name: 'Cabesp', logo: 'convenios/06.webp' },
    { name: 'Itau Saúde', logo: 'convenios/marca.svg' },
    { name: 'Porto Seguro Saúde', logo: 'convenios/porto-saude-seeklogo.svg' },
    { name: 'APAS Botucatu', logo: 'convenios/apas-logo.webp' },
    { name: 'Clinica Delmanto', logo: 'convenios/delmanto.webp' },
    { name: 'Clinica do Bairro', logo: 'convenios/clinica-bairro.webp' },
    { name: 'ASU Botucatu', logo: 'convenios/ASU.webp' },
    { name: 'Solucard', logo: 'convenios/solucard.svg' }
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
