import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';


const routes: Routes = [
  { path: '/lisaluno', component: ListaAlunoComponent },
  { path: '/curaluno ', component: CadastroAlunoComponent },
  { path: '/curaluno ', component: ListaAlunoComponent },
  { path: '/editar', component: ListaAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
