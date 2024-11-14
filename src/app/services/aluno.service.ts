import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Aluno {
codaluno: string;
nomealuno: string;
curso: string;
sexo: string;
}
@Injectable({
providedIn: 'root'
})

export class AlunoService {

private apiUrl = 'http://localhost:3000/alunos';
constructor(private http: HttpClient) {}

getAluno(): Observable<Aluno[]> {
 return this.http.get<Aluno[]>(this.apiUrl);
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
