import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocursosComponent } from './cadastro-cursos.component';

describe('CadastroCursosComponent', () => {
  let component: CadastrocursosComponent;
  let fixture: ComponentFixture<CadastrocursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrocursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrocursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
