import { Component } from '@angular/core';
import { AlunoService, Aluno } from '../../services/aluno.service';

@Component({
selector: 'app-cadastro-aluno',
templateUrl: './cadastro-aluno.component.html',
styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
aluno: Aluno = { codaluno: '', nomealuno: '', curso: '', sexo: '' };

constructor(private alunoService: AlunoService) {}

salvar() {
    this.alunoService.createAluno(this.aluno).subscribe((res) => {
      console.log('Aluno cadastrado:', res);
      this.aluno = { codaluno: '', nomealuno: '', curso: '', sexo: '' };
    });
}
} 
