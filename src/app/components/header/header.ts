import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  
  // Estado do menu mobile (aberto/fechado)
  public isMenuOpen: boolean = false;
  
  // Estado para mudar o estilo do header ao rolar a página (scroll)
  public isScrolled: boolean = false;

  // Itens de navegação centralizados
  public navItems: NavItem[] = [
    { path: '/home', label: 'Início' },
    { path: '/sobre', label: 'Sobre Mim' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/contato', label: 'Contato' }
  ];

  constructor() {}

  // Listener para detectar o scroll do mouse e aplicar efeitos de transparência/sombra
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Alternar o menu hambúrguer no mobile
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fechar o menu ao clicar em um link (importante para mobile)
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}