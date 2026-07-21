import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  
  // Ano dinâmico para o copyright
  public currentYear: number = new Date().getFullYear();

  // Dados da profissional
  public profissional = {
    nome: 'Psicóloga Miguelina B C Gonçalves Mattos',
    crp: 'CRP - 18/04704',
    local: 'Rua Eustácio de Siqueira, 173, Bairro Ribeirão do Lipa, Cuiabá - MT',
    email: 'psicologamiguelina@outlook.com',
    whatsapp: '5565996999264'
  };

  // Redes Sociais
  public redesSociais = [
    {
      nome: 'Instagram',
      url: 'https://instagram.com/perfil',
      classe: 'instagram'
    },
    {
      nome: 'LinkedIn',
      url: 'https://linkedin.com/in/perfil',
      classe: 'linkedin'
    }
  ];

  constructor() {}

  // Função para abrir o WhatsApp diretamente
  abrirWhatsapp(): void {
    window.open(`https://wa.me/${this.profissional.whatsapp}`, '_blank');
  }
}