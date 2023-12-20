import { Injectable } from '@angular/core';
import { Candidato } from 'src/app/modelos/candidato.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private candidatoCollection = 'candidato';

  constructor(private firestore: AngularFirestore) {}

  getCandidatos(): Observable<Candidato[]> {
    return this.firestore.collection<Candidato>(this.candidatoCollection).valueChanges();
  }

  getCandidato(dni: string): Observable<Candidato> {
    return this.firestore
      .doc<Candidato>(`${this.candidatoCollection}/${dni}`)
      .valueChanges()
      .pipe(map(candidato => candidato || {} as Candidato)); 
  }

  agregarCandidato(candidato: Candidato): Promise<any> {
    return this.firestore.collection(this.candidatoCollection).add(candidato);
  }

  actualizarCandidato(dni: string, candidato: Candidato): Promise<void> {
    return this.firestore.doc<Candidato>(`${this.candidatoCollection}/${dni}`).update(candidato);
  }

  eliminarCandidato(dni: string): Promise<void> {
    return this.firestore.doc<Candidato>(`${this.candidatoCollection}/${dni}`).delete();
  }
}
