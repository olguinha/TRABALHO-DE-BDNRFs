import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './components/editar-aluno/editar-aluno.component';
import { ListaCursosComponent } from './components1/lista-cursos/lista-cursos.component';
import { CadastroCursosComponent } from './components1/cadastro-cursos/cadastro-cursos.component';
import { EditarCursosComponent } from './components1/editar-cursos/editar-cursos.component';
import { ListaDisciplinasComponent } from './components2/lista-disciplinas/lista-disciplinas.component';
import { CadastroDisciplinasComponent } from './components2/cadastro-disciplinas/cadastro-disciplinas.component';
import { EditarDisciplinasComponent } from './components2/editar-disciplinas/editar-disciplinas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    CadastroAlunoComponent,
    EditarAlunoComponent,
    ListaCursosComponent,
    CadastroCursosComponent,
    EditarCursosComponent,
    ListaDisciplinasComponent,
    CadastroDisciplinasComponent,
    EditarDisciplinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
