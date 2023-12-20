import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestoTrabajoRoutingModule } from './puesto-trabajo-routing.module';
import { PuestoTrabajoComponent } from './puesto-trabajo.component';
import { FormularioPuestoTrabajoComponent } from './formulario-puesto-trabajo/formulario-puesto-trabajo.component';
import { FormsModule } from '@angular/forms';
import { ListarPuestoTrabajoComponent } from './listar-puesto-trabajo/listar-puesto-trabajo.component';


@NgModule({
  declarations: [
    PuestoTrabajoComponent,
    FormularioPuestoTrabajoComponent,
    ListarPuestoTrabajoComponent
  ],
  imports: [
    CommonModule,
    PuestoTrabajoRoutingModule,
    FormsModule
  ]
})
export class PuestoTrabajoModule { }
