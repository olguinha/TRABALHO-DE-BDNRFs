import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Curso {
  codcurso: string;
  nomecurso: string;
  duracao: number;
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://sua-api-url.com/cursos';

  constructor(private http: HttpClient) {}

  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }
}

