import { Component } from '@angular/core';
import { Curso, CursoService } from '../../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent {

  Curso: Curso = {
    codcurso: '',
    nomecurso: '',
    descricao: '',
    cargaS: '',
    disciplinas: ''
};

  constructor(
    private CursoService: CursoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const codcurso = this.route.snapshot.paramMap.get('codcurso');
    if (codcurso) {
      this.CursoService.getCurso(codcurso).subscribe((data: Curso) => {
        this.Curso = data;
      });
    } else {
      console.error("Parâmetro 'codcurso' não encontrado na URL.");
    }
  }

  excluir(codcurso: string): void {
    this.CursoService.deleteCurso(codcurso).subscribe(() => {
      console.log(`Curso com código ${codcurso} excluído com sucesso.`);
    });
  }

  editar(Curso: Curso): void {
    if (this.Curso.codcurso === Curso.codcurso) {
        this.Curso.nomecurso = Curso.nomecurso;
        this.Curso.descricao = Curso.descricao;
        this.Curso.cargaS = Curso.cargaS;
        this.Curso.disciplinas = Curso.disciplinas;

      console.log(`Curso atualizado: ${JSON.stringify(this.Curso)}`);
    } else {
      console.log('Curso não encontrado!');
    }
  }
}


