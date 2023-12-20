import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCandidatoComponent } from './listar-candidato/listar-candidato.component';
import { FormularioCandidatoComponent } from './formulario-candidato/formulario-candidato.component';

const routes: Routes = [
  { path: '', component: ListarCandidatoComponent },
  { path: 'nuevoCandidato', component: FormularioCandidatoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule { }
