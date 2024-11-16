import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Aluno {
codaluno: String;
nomealuno: String;
curso: String;
sexo: String;
}
@Injectable({
providedIn: 'root'
})

export class AlunoService {

private apiUrl = 'http://localhost:3000/alunos';
constructor(private http: HttpClient) {}


getAluno(codaluno: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${codaluno}`);
}
  
createAluno(aluno: Aluno): Observable<Aluno> {
 return this.http.post<Aluno>(this.apiUrl, aluno);
}

updateAluno(aluno: Aluno): Observable<Aluno> {
 return this.http.put<Aluno>(`${this.apiUrl}/${aluno.codaluno}`, aluno);
}

deleteAluno(codaluno: string): Observable<any> {
 return this.http.delete(`${this.apiUrl}/${codaluno}`);
}
}
