import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso, CursoService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrl: './editar-cursos.component.css'
})
export class EditarCursosComponent implements OnInit {

  Curso: Curso = {
    codcurso: '',
    nomecurso: '',
    descricao: '',
    cargaS: '',
    disciplinas: ''
};

  constructor(
    private CursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const codcurso = this.route.snapshot.paramMap.get('codcurso');
    if (codcurso) {
      this.CursoService.getCursos(codcurso).subscribe(
        (res) => {
          this.Curso = res [0];
        },
        (error) => {
          console.error('Erro ao carregar cursos:', error);
        }
      );
    }
  }

  atualizar(): void {
    this.CursoService.updateCurso(this.Curso).subscribe(
      (res) => {
        console.log('Curso atualizado com sucesso:', res);
        alert('Curso atualizado com sucesso!');
        this.router.navigate(['/cursos']);
      },
      (error) => {
        console.error('Erro ao atualizar curso:', error);
        alert('Ocorreu um erro ao atualizar o curso.');
      }
    );
    
  }

}

