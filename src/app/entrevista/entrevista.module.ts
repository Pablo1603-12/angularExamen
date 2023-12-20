import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrevistaRoutingModule } from './entrevista-routing.module';
import { EntrevistaComponent } from './entrevista.component';
import { FormularioEntrevistaComponent } from './formulario-entrevista/formulario-entrevista.component';
import { ListarEntrevistaComponent } from './listar-entrevista/listar-entrevista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntrevistaComponent,
    
  ],
  imports: [
    CommonModule,
    EntrevistaRoutingModule,
    FormsModule
  ]
})
export class EntrevistaModule { }
