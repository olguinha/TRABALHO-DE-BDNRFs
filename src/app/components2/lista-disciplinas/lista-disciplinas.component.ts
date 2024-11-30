import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Disciplina, DisciplinasService } from '../../services/disciplinas.service';

@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './lista-disciplinas.component.html',
  styleUrl: './lista-disciplinas.component.css'
})
export class ListaDisciplinasComponent implements OnInit {

  disciplinas: Disciplina[] = [];
  

  constructor(
    private DisciplinasService: DisciplinasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.DisciplinasService.getDisciplinas().subscribe((data: Disciplina[] ) => {
      this.disciplinas = data;
    });
  }
  
  excluir(coddisciplina: string): void {
    this.DisciplinasService.deleteDisciplinas(coddisciplina).subscribe(() => {
      console.log(`Disciplina com código ${coddisciplina} excluído com sucesso.`);
      
    });
  }

  editar(disciplinas: Disciplina): void {

    if (this.disciplinas.some(a => a.coddisciplina === disciplinas.coddisciplina)) {
      console.log(`disciplinas atualizado: ${JSON.stringify(this.disciplinas)}`);
    } else {
      console.log('disciplinas não encontrado!');
    }
  }
}
