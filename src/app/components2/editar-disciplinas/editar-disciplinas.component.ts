import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplina, DisciplinasService } from '../../services/disciplinas.service';

@Component({
  selector: 'app-editar-disciplinas',
  templateUrl: './editar-disciplinas.component.html',
  styleUrl: './editar-disciplinas.component.css'
})
export class EditarDisciplinasComponent implements OnInit {

  Disciplina: Disciplina = {
    coddisciplina: '',
    nomedisciplina: '',
    ementa: '',
    Carga_horaria: '',
    professores: '',
  };


  constructor(
   private DisciplinasService: DisciplinasService ,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const coddisciplina = this.route.snapshot.paramMap.get('coddisciplina');
    if (coddisciplina) {
      this.DisciplinasService.getDisciplinas(coddisciplina).subscribe(
        (res) => {
          this.Disciplina = res [0];
        },
        (error) => {
          console.error('Erro ao carregar disciplina:', error);
        }
      );
    }
  }

  atualizar(): void {
    this.DisciplinasService.updateDisciplinas(this.Disciplina).subscribe(
      (res) => {
        console.log('disciplina atualizado com sucesso:', res);
        alert('disciplina atualizado com sucesso!');
        this.router.navigate(['/disciplina']); 
      },
      (error) => {
        console.error('Erro ao atualizar disciplina:', error);
        alert('Ocorreu um erro ao atualizar o disciplina.');
      }
    );
  }
}


