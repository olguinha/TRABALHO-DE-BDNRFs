import { Component, OnInit } from '@angular/core';
import { AlunoService, Aluno } from '../../services/aluno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {
  aluno: Aluno = {
    codaluno: '',
    nomealuno: '',
    curso: '',
    sexo: ''
  };

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const codaluno = this.route.snapshot.paramMap.get('codaluno');
    if (codaluno) {
      this.alunoService.getAluno(codaluno).subscribe((data: Aluno) => {
        this.aluno = data;
      });
    } else {
      console.error("Parâmetro 'codaluno' não encontrado na URL.");
    }
  }

  excluir(codaluno: string): void {
    this.alunoService.deleteAluno(codaluno).subscribe(() => {
      console.log(`Aluno com código ${codaluno} excluído com sucesso.`);
    });
  }

  editar(aluno: Aluno): void {
    if (this.aluno.codaluno === aluno.codaluno) {
      this.aluno.nomealuno = aluno.nomealuno;
      this.aluno.curso = aluno.curso;
      this.aluno.sexo = aluno.sexo;

      console.log(`Aluno atualizado: ${JSON.stringify(this.aluno)}`);
    } else {
      console.log('Aluno não encontrado!');
    }
  }
}
