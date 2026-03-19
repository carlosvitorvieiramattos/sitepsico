import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Interface para tipar os diferenciais da psicóloga
interface Diferencial {
  icone: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-home',
  standalone: true, // Padrão nas versões mais recentes
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {

  // Dados que serão renderizados no HTML
  public diferenciais: Diferencial[] = [
    {
      icone: 'brain',
      titulo: 'Abordagem TCC',
      descricao: 'Foco em reestruturação cognitiva e mudanças comportamentais práticas.'
    },
    {
      icone: 'heart',
      titulo: 'Acolhimento Humano',
      descricao: 'Ambiente seguro e livre de julgamentos para sua jornada de autodescoberta.'
    },
    {
      icone: 'video',
      titulo: 'Atendimento Online',
      descricao: 'Sessões por videochamada com a mesma eficácia do presencial e mais conforto.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aqui você poderia carregar dados de uma API, como posts do blog
    console.log('Página Home carregada com sucesso.');
  }

  // Método simples para scroll suave até a seção de agendamento
  scrollToContato(): void {
    const elemento = document.getElementById('agendamento');
    elemento?.scrollIntoView({ behavior: 'smooth' });
  }
}