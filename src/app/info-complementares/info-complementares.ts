import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user';

declare let fbq: any;

@Component({
  selector: 'app-info-complementares',
  imports: [CommonModule],
  templateUrl: './info-complementares.html',
  styleUrl: './info-complementares.scss',
})
export class InfoComplementares {

  private mensagem = inject(UserService);

  whats() {
    this.mensagem.abreWhatsApp();
  }

  rastrearClique(destino: string): void {
    if (typeof fbq !== 'undefined') {
      const eventoMeta = destino === 'WhatsApp' ? 'Contact' : 'FindLocation';
      
      fbq('track', eventoMeta, {
        content_name: destino,
        content_category: 'Cliques de Ação'
      });
    }
  }
}
