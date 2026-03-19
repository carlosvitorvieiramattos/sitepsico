import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definindo a estrutura de um serviço clínico
interface Servico {
  id: number;
  titulo: string;
  descricaoCurta: string;
  detalhes: string[];
  publicoAlvo: string;
  modalidade: 'Online' | 'Presencial' | 'Híbrido';
  imagemUrl: string;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss'
})
export class ServicosComponent implements OnInit {

  // Lista de serviços oferecidos pela psicóloga
  public listaServicos: Servico[] = [
    {
      id: 1,
      titulo: 'Psicoterapia Individual',
      descricaoCurta: 'Espaço focado no autoconhecimento e resolução de conflitos internos.',
      detalhes: [
        'Sessões de 50 minutos',
        'Abordagem Cognitivo-Comportamental',
        'Tratamento de ansiedade e depressão'
      ],
      publicoAlvo: 'Adultos e Adolescentes',
      modalidade: 'Híbrido',
      imagemUrl: 'assets/terapia-individual.jpg'
    },
    {
      id: 2,
      titulo: 'Terapia de Casal',
      descricaoCurta: 'Mediação de diálogos para fortalecer o vínculo e resolver crises.',
      detalhes: [
        'Foco na comunicação assertiva',
        'Resolução de conflitos conjugais',
        'Alinhamento de objetivos de vida'
      ],
      publicoAlvo: 'Casais',
      modalidade: 'Presencial',
      imagemUrl: 'assets/terapia-casal.jpg'
    },
    {
      id: 3,
      titulo: 'Orientação Profissional',
      descricaoCurta: 'Auxílio na escolha de carreira ou transição no mercado de trabalho.',
      detalhes: [
        'Testes de perfil comportamental',
        'Planejamento de carreira',
        'Identificação de habilidades'
      ],
      publicoAlvo: 'Estudantes e Profissionais',
      modalidade: 'Online',
      imagemUrl: 'assets/orientacao.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica inicial se necessário
  }

  // Método para disparar o interesse em um serviço específico
  solicitarInformacoes(servico: string): void {
    const mensagem = `Olá! Gostaria de mais informações sobre o serviço: ${servico}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  }
}