import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { puestoTrabajo } from 'src/app/modelos/puestoTrabajo.model';

@Injectable({
  providedIn: 'root'
})
export class PuestoTrabajoService {

  private puestoTrabajoCollection = 'puestoTrabajo';

  constructor(private firestore: AngularFirestore) {}

  getPuestoTrabajo(): Observable<puestoTrabajo[]> {
    return this.firestore.collection<puestoTrabajo>(this.puestoTrabajoCollection).valueChanges();
  }

  getPuestosTrabajo(id: string): Observable<puestoTrabajo> {
    return this.firestore
      .doc<puestoTrabajo>(`${this.puestoTrabajoCollection}/${id}`)
      .valueChanges()
      .pipe(map(puestoTrabajo => puestoTrabajo || {} as puestoTrabajo)); 
  }

  agregarPuestoTrabajo(puestoTrabajo: puestoTrabajo): Promise<any> {
    return this.firestore.collection(this.puestoTrabajoCollection).add(puestoTrabajo);
  }

  actualizarPuestoTrabajo(id: string, puestoTrabajo: puestoTrabajo): Promise<void> {
    return this.firestore.doc<puestoTrabajo>(`${this.puestoTrabajoCollection}/${id}`).update(puestoTrabajo);
  }

  eliminarPuestoTrabajo(id: string): Promise<void> {
    return this.firestore.doc<puestoTrabajo>(`${this.puestoTrabajoCollection}/${id}`).delete();
  }
}
