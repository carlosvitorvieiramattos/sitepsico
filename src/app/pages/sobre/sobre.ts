import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Formacao {
  ano: string;
  titulo: string;
  instituicao: string;
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SobreComponent implements OnInit {

  // Informações principais para exibição dinâmica
  public nomeProfissional: string = 'Dra. Nome da Psicóloga';
  public registroCRP: string = 'CRP 06/123456';
  public especialidade: string = 'Psicóloga Clínica Especialista em TCC';

  public biografia: string = `
    Com mais de 10 anos de experiência, dedico minha carreira a auxiliar 
    pessoas a navegarem por seus desafios emocionais. Minha prática é 
    pautada na Ética, no Acolhimento e na Ciência.
  `;

  public formacoes: Formacao[] = [
    {
      ano: '2015',
      titulo: 'Graduação em Psicologia',
      instituicao: 'Universidade Federal (UFXX)'
    },
    {
      ano: '2017',
      titulo: 'Especialização em Terapia Cognitivo-Comportamental',
      instituicao: 'Instituto de Psicologia XPTO'
    },
    {
      ano: '2020',
      titulo: 'Mestrado em Saúde Mental',
      instituicao: 'Universidade de São Paulo (USP)'
    }
  ];

  // Valores que guiam o atendimento
  public valores: string[] = [
    'Ética Profissional',
    'Escuta Atenta',
    'Base Científica',
    'Sigilo Absoluto'
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica para analytics ou animações de entrada
  }
}