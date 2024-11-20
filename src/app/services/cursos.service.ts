import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Curso {
  codcurso: String,
    nomecurso: String,
    descricao: String,
    cargaS: String,
    disciplinas:String
}

@Injectable({
  providedIn: 'root'
})

export class CursoService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getCurso(codcurso: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${codcurso}`);
  }

  getCursos(codcurso: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  updateCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${curso.codcurso}`, curso);
  }

  deleteCurso(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}





