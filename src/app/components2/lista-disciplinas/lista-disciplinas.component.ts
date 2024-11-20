import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Disciplina, DisciplinasService } from '../../services/disciplinas.service';

@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './lista-disciplinas.component.html',
  styleUrl: './lista-disciplinas.component.css'
})
export class ListaDisciplinasComponent implements OnInit {

  Disciplina: Disciplina = {
    coddisciplina: '',
    nomedisciplina: '',
    ementa: '',
    Carga_horaria: '',
    professores: '',
  };

  constructor(
    private DisciplinasService: DisciplinasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const coddisciplina = this.route.snapshot.paramMap.get('coddisciplina');
    if (coddisciplina) {
      console.log(`Parâmetro coddisciplina encontrado: ${coddisciplina}`);
      this.DisciplinasService.getDisciplinas(coddisciplina).subscribe(
        (data: Disciplina) => {
          console.log('Dados da disciplina recebidos:', data);
          this.Disciplina = data;
        },
        (error) => {
          console.error('Erro ao buscar disciplina:', error);
        }
      );
    } else {
      console.error("Parâmetro 'coddisciplina' não encontrado na URL.");
    }
  }
  
  excluir(coddisciplina: string): void {
    this.DisciplinasService.deleteDisciplinas(coddisciplina).subscribe(() => {
      console.log(`Disciplina com código ${coddisciplina} excluído com sucesso.`);
    });
  }

  editar(coddisciplina: Disciplina): void {

    if (this.Disciplina.coddisciplina === this.Disciplina.coddisciplina) {
        this.Disciplina.nomedisciplina = this.Disciplina.nomedisciplina;
        this.Disciplina.ementa = this.Disciplina.ementa;
        this.Disciplina.Carga_horaria = this.Disciplina.Carga_horaria;
        this.Disciplina.professores = this.Disciplina.professores;
        console.log(`Disciplina atualizado: ${JSON.stringify(this.Disciplina)}`);
      } else {
        console.log('Disciplina não encontrado!');

    }
  }
}
