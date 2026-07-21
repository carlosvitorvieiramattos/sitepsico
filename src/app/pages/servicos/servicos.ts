import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definindo a estrutura de um serviço clínico
interface Servico {
  id: number;
  titulo: string;
  descricaoCurta: string;
  detalhes: string[];
  publicoAlvo: string;
  modalidade: string;
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
      descricaoCurta: 'Espaço seguro e totalmente confidencial para explorar seus desafios pessoais.',
      detalhes: [
        'Sessões de 50 minutos',
        'Abordagem Fenomenológica Existencial',
        'Tratamento de crises existenciais: ansiedade, depressão e identidade em devir'
      ],
      publicoAlvo: 'Adultos e Adolescentes',
      modalidade: 'Híbrido',
      imagemUrl: 'assets/terapia-individual.jpg'
    },
    {
      id: 2,
      titulo: 'Terapia de Casal',
      descricaoCurta: 'Fortaleça seu relacionamento com comunicação efetiva e empatia.',
      detalhes: [
        'Foco na comunicação assertiva',
        'Resolução de conflitos conjugais',
        'Alinhamento de objetivos de vida'
      ],
      publicoAlvo: 'Casais',
      modalidade: 'Híbrido',
      imagemUrl: 'assets/terapia-casal.jpg'
    },
    {
      id: 3,
      titulo: 'Terapia Familiar',
      descricaoCurta: 'Tendo como foco o fenômeno, espaço relacional onde a comunicação e o afeto circulam ou ficam travados.',
      detalhes: [
        'Foco no fenômeno no aqui-agora da experiência familiar',
        'Olhar e entender como a família vivencia certas situações',
        'Sofrimento como manifestação da dinâmica do grupo, não patologia individual',
        'Crise familiar, angústia, sentido, liberdade, responsabilidade e abertura entre pares'
      ],
      publicoAlvo: 'Famílias',
      modalidade: 'Híbrido',
      imagemUrl: 'assets/terapia-familiar.jpg'
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