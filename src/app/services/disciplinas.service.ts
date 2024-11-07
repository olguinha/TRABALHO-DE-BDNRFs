import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Disciplina {
    _id?: string;
    coddisciplina: String,
    nomedisciplina: String,
    ementa: String,
    Carga_horaria: Date,
    professores: String

}
@Injectable({
  providedIn: 'root'
})

export class DisciplinasService {

  private apiUrl = 'http://localhost:3000/disciplinas';
  constructor(private http: HttpClient) {}
  getDisciplinas(): Observable<Disciplina[]> {
  return this.http.get<[]>(this.apiUrl);
  }
  createDisciplinas(disciplinas: Disciplina): Observable<Disciplina> {
  return this.http.post<Disciplina>(this.apiUrl, disciplinas);
  }
  updateDisciplinas(disciplinas: Disciplina): Observable<Disciplina> {
  return this.http.put<Disciplina>(`${this.apiUrl}/${disciplinas._id}`, disciplinas);
  }
  deleteDisciplinas(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
