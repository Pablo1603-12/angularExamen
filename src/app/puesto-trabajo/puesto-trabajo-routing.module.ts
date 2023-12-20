import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuestoTrabajoComponent } from './puesto-trabajo.component';
import { FormularioCandidatoComponent } from '../candidato/formulario-candidato/formulario-candidato.component';
import { FormularioPuestoTrabajoComponent } from './formulario-puesto-trabajo/formulario-puesto-trabajo.component';
import { ListarPuestoTrabajoComponent } from './listar-puesto-trabajo/listar-puesto-trabajo.component';

const routes: Routes = [
  { path: '', component: ListarPuestoTrabajoComponent },
  { path: 'nuevoPuestoTrabajo', component: FormularioPuestoTrabajoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestoTrabajoRoutingModule { }
