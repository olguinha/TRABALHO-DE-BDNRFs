import { Component, OnInit } from '@angular/core';
import { Aluno, AlunoService } from '../../services/aluno.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {
  alunos: Aluno[] = [];  // Mudança aqui para armazenar todos os alunos

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe((data: Aluno[]) => {
      this.alunos = data;
    });
  }

  excluir(codaluno: string): void {
    this.alunoService.deleteAluno(codaluno).subscribe(() => {
      console.log(`Aluno com código ${codaluno} excluído com sucesso.`);
      // Após excluir, você pode atualizar a lista de alunos
      this.ngOnInit();
    });
  }

  editar(aluno: Aluno): void {
    if (this.alunos.some(a => a.codaluno === aluno.codaluno)) {
      // Lógica para editar aluno
      console.log(`Aluno atualizado: ${JSON.stringify(aluno)}`);
    } else {
      console.log('Aluno não encontrado!');
    }
  }
}
