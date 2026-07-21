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
  public nomeProfissional: string = 'Psicóloga Miguelina B C Gonçalves Mattos';
  public registroCRP: string = 'CRP - 18/04704';
  public especialidade: string = 'Psicóloga Clínica Especialista em Clínica Fenomenológica-Existencial';

  public biografia: string = `
    Com anos de experiência, dedico minha carreira a auxiliar e acompanhar pessoas 
    para ajudá-las a navegar por seus desafios emocionais com lucidez, dando sentido 
    à vida. Minha prática é pautada na Ética, no Acolhimento e na Ciência. Sou orientada 
    pela escuta qualificada e pela compreensão fenomenológica da experiência. Ofereço um 
    espaço terapêutico de reflexão, elaboração emocional e desenvolvimento pessoal. 
    Aqui você encontra um espaço de escuta, cuidado e acolhimento.
  `;

  public formacoes: Formacao[] = [
    {
      ano: '',
      titulo: 'Graduação em Psicologia',
      instituicao: 'Universidade de Cuiabá (UNIC)'
    },
    {
      ano: '',
      titulo: 'Especialização em Terapia Fenomenológica-Existencial',
      instituicao: 'Clínica Fenomenológica da Infância, Adolescência e Famílias'
    },
    {
      ano: '',
      titulo: 'Formação em Clínica Ampliada Fenomenológica Existencial',
      instituicao: 'Instituto Núcleo de Clínica Ampliada Fenomenológica Existencial (NUCAFE)'
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