
import { Component, OnInit } from '@angular/core';
import { AlunoService, Aluno } from '../../services/aluno.service';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrl: './lista-aluno.component.css'
})
export class ListaAlunoComponent {
  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoService) {}
  ngOnInit(): void {
   this.alunoService.getAluno().subscribe((data) => {
   this.alunos = data;
   });
  }
  excluir(codaluno: string) {
   this.alunoService.deleteAluno(codaluno).subscribe(() => {
   this.alunos = this.alunos.filter((aluno) => aluno.codaluno !== codaluno);
   });
  }
  
  editar(aluno: Aluno) {
    const alunoExistente = this.alunos.find(a => a.codaluno === aluno.codaluno);
  
  if (alunoExistente) {
    
    aluno.codaluno = aluno.codaluno;
    aluno.curso = aluno.curso;
    aluno.sexo = aluno.sexo;
    
    console.log(`Aluno atualizado: ${JSON.stringify(alunoExistente)}`);
  } else {
    console.log('Aluno não encontrado!');
  }
  }
  }
  