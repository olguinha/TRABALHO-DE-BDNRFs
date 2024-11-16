import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Curso, CursoService  } from '../../services/cursos.service';



@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css']
})

export class  CadastrocursosComponent  {

   Curso: Curso = { codcurso: '', nomecurso: '', descricao: '', cargaS: '', disciplinas: '' };

   constructor(private cursoService: CursoService) {} 
 
   salvar() {
     this.cursoService.createCurso(this.Curso).subscribe(
       (res: any) => {
         console.log('Curso cadastrado:', res);
         this.Curso = { codcurso: '', nomecurso: '', descricao: '', cargaS: '', disciplinas: '' };
       },
       (error: any) => {
         console.error('Erro ao salvar o curso:', error);
       }
     );
   }
}
