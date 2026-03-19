import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class ContatoComponent {
  contatoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarMensagem() {
    if (this.contatoForm.valid) {
      console.log('Dados do agendamento:', this.contatoForm.value);
      // Aqui você integraria com um serviço de e-mail ou API
    }
  }
}