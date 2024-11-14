import { Component } from '@angular/core';
import { AlunoService, Aluno } from '../../services/aluno.service';

@Component({
selector: 'app-cadastro-aluno',
templateUrl: './cadastro-aluno.component.html',
styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {


constructor(private alunoService: AlunoService) {}


Aluno: Aluno = { codaluno: '', nomealuno: '', curso: '', sexo: ''};
AlunoService: any;

salvar() {
    this.alunoService.createAluno(this.Aluno).subscribe((res) => {
      console.log('Aluno cadastrado:', res);
      this.Aluno= { codaluno: '', nomealuno: '', curso: '', sexo: '' };
    });
}
} 
