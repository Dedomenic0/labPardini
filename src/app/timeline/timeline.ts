import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {

 // Histório do laboratório (Timeline)
  timelineEvents = [
    { year: '1948', icon: '/building.svg', title: 'Fundação', description: 'Início das atividades como laboratório de análises clínicas em Botucatu.' },
    { year: '1982', icon: '/building-add.svg', title: 'Expansão', description: 'A primeira sede própria é inaugurada na Rua Quintino Bocaiuva, onde permaneceu ativo por 40 anos.' },
    { year: '1998', icon: '/building-exclamation.svg', title: 'Novas Técnicas', description: 'Uma nova unidade no interio do Hospital Misericórdia Botucatuense é inaugurada, que durante 12 anos serviu o próprio hospital, o Pronto atendimento e o Hospital Regional.' },
    { year: '2009', icon: '/building-check.svg', title: 'Expansão', description: 'É inaugurada a unidade na Avenida Dom Lúcio, atual localização da instituição, trazendo mais conforto aos pacientes e modernização das instalações.' }
  ];

}
