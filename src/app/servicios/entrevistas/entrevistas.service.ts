import { Injectable } from '@angular/core';
import { entrevista } from 'src/app/modelos/entrevista.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrevistasService {
  private EntrevistaCollection = 'puestoTrabajo';

  constructor(private firestore: AngularFirestore) {}

  getEntrevista(): Observable<entrevista[]> {
    return this.firestore.collection<entrevista>(this.EntrevistaCollection).valueChanges();
  }

  getEntrevistas(id: string): Observable<entrevista> {
    return this.firestore
      .doc<entrevista>(`${this.EntrevistaCollection}/${id}`)
      .valueChanges()
      .pipe(map(entrevista => entrevista || {} as entrevista)); 
  }

  agregarEntrevista(entrevista: entrevista): Promise<any> {
    return this.firestore.collection(this.EntrevistaCollection).add(entrevista);
  }

  actualizarEntrevista(id: string, entrevista: entrevista): Promise<void> {
    return this.firestore.doc<entrevista>(`${this.EntrevistaCollection}/${id}`).update(entrevista);
  }

  eliminarEntrevista(id: string): Promise<void> {
    return this.firestore.doc<entrevista>(`${this.EntrevistaCollection}/${id}`).delete();
  }
}
