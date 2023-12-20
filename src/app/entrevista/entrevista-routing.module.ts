import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistaComponent } from './entrevista.component';
import { ListarCandidatoComponent } from '../candidato/listar-candidato/listar-candidato.component';
import { FormularioEntrevistaComponent } from './formulario-entrevista/formulario-entrevista.component';
import { ListarEntrevistaComponent } from './listar-entrevista/listar-entrevista.component';

const routes: Routes = [
  { path: '', component: ListarEntrevistaComponent },
  { path: 'nuevaEntrevista', component: FormularioEntrevistaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrevistaRoutingModule { }
