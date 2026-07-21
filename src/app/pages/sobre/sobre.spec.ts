import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SobreComponent } from './sobre';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicionado para permitir custom elements no template
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Roda a detecção de alterações inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the professional name and CRP', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Psicóloga Miguelina B C Gonçalves Mattos');
    expect(compiled.textContent).toContain('CRP - 18/04704');
  });

  it('should display the biography', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica uma parte da biografia para confirmar que ela foi renderizada
    expect(compiled.textContent).toContain('dedico minha carreira a auxiliar e acompanhar pessoas');
  });

  it('should render all formations', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formationItems = compiled.querySelectorAll('ion-item'); // Supondo que você use ion-item para a lista
    // O número de items deve ser igual ao do array 'formacoes'
    expect(formationItems.length).toBe(component.formacoes.length);
    expect(compiled.textContent).toContain('Graduação em Psicologia');
    expect(compiled.textContent).toContain('Especialização em Terapia Fenomenológica-Existencial');
  });

  it('should render all values', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Supondo que os valores estão em um elemento com a classe .valores-lista
    const valuesElements = compiled.querySelectorAll('.valores-lista li');
    expect(valuesElements.length).toBe(component.valores.length);
    expect(compiled.textContent).toContain('Ética Profissional');
    expect(compiled.textContent).toContain('Sigilo Absoluto');
  });
});
