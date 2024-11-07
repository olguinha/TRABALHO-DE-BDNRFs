import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Curso {
    _id?: string;
    codcurso: String;
    nomecurso: String;
    descricao: String;
    carga_horaria_total: Date;
    disciplinas:  String;
}
@Injectable({
  providedIn: 'root'
})

export class CursoService {

    private apiUrl = 'http://localhost:3000/cursos';
    constructor(private http: HttpClient) {}
    getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
    }
    createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
    }
    updateCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${curso._id}`, curso);
    }
    deleteCurso(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

