import { Component } from '@angular/core';
import { Curso, CursoService } from '../../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent {
  cursos: Curso[] = [];
  


  constructor(
    private CursoService: CursoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.CursoService.getCursos().subscribe((data: Curso[]) => {
      this.cursos = data;
    });
  }

  excluir(codcurso: string): void {
    this.CursoService.deleteCurso(codcurso).subscribe(() => {
      console.log(`Curso com código ${codcurso} excluído com sucesso.`);
    });
  }

  editar(cursos: Curso): void {
    if (this.cursos.some(a => a.codcurso === cursos.codcurso)) {
      console.log(`curso atualizado: ${JSON.stringify(this.cursos)}`);
    } else {
      console.log('curso não encontrado!');
    }
  }
}




