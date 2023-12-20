import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'candidato', loadChildren: () => import('./candidato/candidato.module').then(m => m.CandidatoModule) },
  { path: 'entrevista', loadChildren: () => import('./entrevista/entrevista.module').then(m => m.EntrevistaModule) },
  { path: 'puestoTrabajo', loadChildren: () => import('./puesto-trabajo/puesto-trabajo.module').then(m => m.PuestoTrabajoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
