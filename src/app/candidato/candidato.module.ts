import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatoComponent } from './candidato.component';
import { ListarCandidatoComponent } from './listar-candidato/listar-candidato.component';
import { FormularioCandidatoComponent } from './formulario-candidato/formulario-candidato.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidatoComponent,
    ListarCandidatoComponent,
    FormularioCandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    FormsModule
  ]
})
export class CandidatoModule { }
