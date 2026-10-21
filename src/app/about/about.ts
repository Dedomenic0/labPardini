import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cabecalho } from '../cabecalho/cabecalho';
import { Timeline } from '../timeline/timeline';
import { Equipe } from '../equipe/equipe';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Cabecalho, Timeline, Equipe, Footer],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  // Dados de diferenciais ou estatísticas do laboratório para exibir em destaque
  diferenciais = [
    {
      titulo: 'Tecnologia Avançada',
      descricao: 'Parque analítico moderno com automação e rigoroso controle de qualidade.',
      icone: '🔬'
    },
    {
      titulo: 'Parceria de Excelência',
      descricao: 'Apoio logístico e técnico integrado com redes de referência nacional.',
      icone: '🤝'
    },
    {
      titulo: 'Atendimento Humanizado',
      descricao: 'Foco no conforto e na segurança do paciente em todas as etapas da coleta.',
      icone: '💙'
    },
    {
      titulo: 'Agilidade e Precisão',
      descricao: 'Resultados confiáveis entregues no menor prazo possível.',
      icone: '⚡'
    }
  ];
}
