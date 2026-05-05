import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacidade',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="privacy-page">
      <div class="container">
        <h1>Política de Privacidade</h1>
        <div class="content glass-panel">
          <p>Sua privacidade é importante para nós. É política deste site respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar.</p>
          
          <h2>1. Coleta de Informações</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como o agendamento de consultas). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
          
          <h2>2. Uso de Dados</h2>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Os dados fornecidos no formulário de contato são utilizados exclusivamente para o retorno da sua solicitação.</p>
          
          <h2>3. Sigilo Profissional</h2>
          <p>Como profissionais de psicologia, seguimos rigorosamente o Código de Ética Profissional do Psicólogo, garantindo o sigilo absoluto de todas as informações compartilhadas durante o processo terapêutico.</p>
          
          <h2>4. Links para Terceiros</h2>
          <p>Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          
          <h2>5. Consentimento</h2>
          <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .privacy-page {
      padding: 120px 0 80px;
      min-height: 80vh;
      background: var(--light-bg);
    }
    h1 {
      color: var(--primary-color);
      margin-bottom: 40px;
      text-align: center;
    }
    .content {
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    h2 {
      font-size: 1.4rem;
      color: var(--primary-color);
      margin-top: 30px;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 15px;
      color: var(--text-dark);
      line-height: 1.8;
    }
  `],
})
export class PrivacidadeComponent {}
