import { Component } from '@angular/core';
import { Curso } from '../../services/cursos.service';
import { CursoService } from '../../services/cursos.service';


@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css']
})

export class  CadastrocursosComponent  {

  Curso: Curso = { codcurso: '', nomecurso: '',  descricao: '', cargaS: '', disciplinas: ''};
  CursoService: any;

  salvar() {
    this.CursoService.createCurso (this.Curso).subscribe((res: any) => {
    console.log('Aluno cadastrado:', res);
    this.Curso = { codcurso: '', nomecurso: '', descricao: '', cargaS: '', disciplinas: ''};
    });
   }
}
