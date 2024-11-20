import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Disciplina {
  coddisciplina: String,
  nomedisciplina: String,
  ementa: String,
  Carga_horaria: string,
  professores: String

}
@Injectable({
  providedIn: 'root'
})

export class DisciplinasService {

  private apiUrl = 'http://localhost:3000/disciplinas';

  constructor(private http: HttpClient) {}

  getDisciplinas(coddisciplina: string): Observable<Disciplina> {
    return this.http.get<Disciplina>(`URL_DA_API/${coddisciplina}`);
  }

  createDisciplinas(disciplinas: Disciplina): Observable<Disciplina> {
  return this.http.post<Disciplina>(this.apiUrl, disciplinas);
  }

  updateDisciplinas(disciplinas: Disciplina): Observable<Disciplina> {
  return this.http.put<Disciplina>(`${this.apiUrl}/${disciplinas.coddisciplina}`, disciplinas);
  }
  
  deleteDisciplinas(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
