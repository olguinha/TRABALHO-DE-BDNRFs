import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Disciplinas {
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
private apiUrl = 'http://localhost:3000/displinas';
constructor(private http: HttpClient) {}
getDisciplinas(): Observable<Disciplinas[]> {
 return this.http.get<[]>(this.apiUrl);
}
createDisciplinas(disciplinas: Disciplinas): Observable<Disciplinas> {
 return this.http.post<Disciplinas>(this.apiUrl, disciplinas);
}
updateDisciplinas(disciplinas: Disciplinas): Observable<Disciplinas> {
 return this.http.put<Disciplinas>(`${this.apiUrl}/${disciplinas._id}`, disciplinas);
}
deleteDisciplinas(id: string): Observable<any> {
 return this.http.delete(`${this.apiUrl}/${id}`);
}
}
