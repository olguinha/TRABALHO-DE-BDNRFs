import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';


import { EditarAlunoComponent } from './components/editar-aluno/editar-aluno.component';
import { CadastrocursosComponent } from './components1/cadastro-cursos/cadastro-cursos.component';
import { EditarCursosComponent } from './components1/editar-cursos/editar-cursos.component';
import { ListaCursosComponent } from './components1/lista-cursos/lista-cursos.component';

import { CadastroDisciplinasComponent } from './components2/cadastro-disciplinas/cadastro-disciplinas.component';
import { ListaDisciplinasComponent } from './components2/lista-disciplinas/lista-disciplinas.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { EditarDisciplinasComponent } from './components2/editar-disciplinas/editar-disciplinas.component';


const routes: Routes = [
  // Rota Principal

  { path: '', component: MenuPrincipalComponent },
 

  // Rotas dos alunos
  { path: 'listaluno', component: ListaAlunoComponent },
  { path: 'cadastroraluno', component: CadastroAlunoComponent },
  { path: 'editaraluno', component: EditarAlunoComponent },

  // Rotas dos cursos
  { path: 'cadastrarcursos', component: CadastrocursosComponent },
  { path: 'editarcursos', component: EditarCursosComponent },
  { path: 'listacurso', component: ListaCursosComponent },
  

  // Rotas das disciplinas
  { path: 'cadastrodisciplina', component: CadastroDisciplinasComponent },
  { path: 'editadisciplina', component: EditarDisciplinasComponent },
  { path: 'listadisciplina', component: ListaDisciplinasComponent },

  { path: '**', redirectTo: '/', pathMatch: 'full' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
