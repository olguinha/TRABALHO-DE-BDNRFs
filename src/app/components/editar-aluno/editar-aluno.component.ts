import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService, Aluno } from '../../services/aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  aluno: Aluno = { 
                   codaluno: '',
                   nomealuno: '',
                   curso: '',
                   sexo: ''
                   };

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const codaluno = this.route.snapshot.paramMap.get('codaluno');
    if (codaluno) {
      this.alunoService.getAluno(codaluno).subscribe(
        (res) => {
          this.aluno = res;
        },
        (error) => {
          console.error('Erro ao carregar aluno:', error);
        }
      );
    }
  }

  atualizar(): void {
    this.alunoService.updateAluno(this.aluno).subscribe(
      (res) => {
        console.log('Aluno atualizado com sucesso:', res);
        alert('Aluno atualizado com sucesso!');
        this.router.navigate(['/alunos']); 
      },
      (error) => {
        console.error('Erro ao atualizar aluno:', error);
        alert('Ocorreu um erro ao atualizar o aluno.');
      }
    );
  }
}
