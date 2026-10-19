import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user';

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
}
