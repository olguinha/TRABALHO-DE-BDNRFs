import { Component } from '@angular/core';
import { Disciplina, DisciplinasService } from '../../services/disciplinas.service';
@Component({
  selector: 'app-cadastro-disciplinas',
  templateUrl: './cadastro-disciplinas.component.html',
  styleUrl: './cadastro-disciplinas.component.css'
})

  export class CadastroDisciplinasComponent {
    
    Disciplina: Disciplina = {
      coddisciplina: '',
      nomedisciplina: '',
      ementa: '',
      Carga_horaria: '',
      professores: '',
    };
  
    constructor(private DisciplinasService: DisciplinasService) {}
  
    salvar() {
      this.DisciplinasService.createDisciplinas(this.Disciplina).subscribe((res) => {
        console.log('Disciplina cadastrada:', res);
        this.Disciplina = {
          coddisciplina: '',
          nomedisciplina: '',
          ementa: '',
          Carga_horaria: '',
          professores: '',
        };
      });
    }
  }
  
