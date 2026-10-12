import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ExamesService } from '../services/exames';

@Component({
  selector: 'app-guia-exames',
  imports: [CommonModule],
  templateUrl: './guia-exames.html',
  styleUrl: './guia-exames.scss',
})
export class GuiaExames {

  private examesService = inject(ExamesService);

  ngOnInit() {
    this.carregarExames();
  }

  carregarExames() {
    this.examesService.getExames().subscribe((exames) => {
      console.log(exames);
    });
  }
}
