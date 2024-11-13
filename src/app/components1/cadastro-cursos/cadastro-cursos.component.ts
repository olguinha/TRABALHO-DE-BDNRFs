import { Component } from '@angular/core';
import { CursoService, Curso } from '../../services/curso.service';

@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css']
})
export class CadastroCursosComponent {
  curso: Curso = { codcurso: '', nomecurso: '', duracao: 0 };  // Definindo a propriedade 'curso'

  constructor(private cursoService: CursoService) {}

  salvar() {  // Definindo o método 'salvar'
    this.cursoService.createCurso(this.curso).subscribe((res) => {
      console.log('Curso cadastrado:', res);
      this.curso = { codcurso: '', nomecurso: '', duracao: 0 };
    });
  }
}
