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
    nome: 'Dra. Nome da Psicóloga',
    crp: '06/123456',
    local: 'Rua Exemplo, 123 - Sala 42, São Paulo - SP',
    email: 'contato@psicologa.com.br',
    whatsapp: '5511999999999'
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