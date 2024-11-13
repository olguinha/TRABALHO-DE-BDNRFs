
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
   this.alunoService.getAlunos().subscribe((data) => {
   this.alunos = data;
   });
  }
  excluir(id: string) {
   this.alunoService.deleteAluno(id).subscribe(() => {
   this.alunos = this.alunos.filter((aluno) => aluno._id !== id);
   });
  }
  editar(aluno: Aluno) {
   // Lógica para editar
  }
  }
  