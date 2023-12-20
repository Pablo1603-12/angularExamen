import { Component } from '@angular/core';
import { puestoTrabajo } from 'src/app/modelos/puestoTrabajo.model';
import { PuestoTrabajoService } from 'src/app/servicios/puestoTrabajo/puesto-trabajo.service';

@Component({
  selector: 'app-listar-puesto-trabajo',
  templateUrl: './listar-puesto-trabajo.component.html',
  styleUrls: ['./listar-puesto-trabajo.component.css']
})
export class ListarPuestoTrabajoComponent {
  puestoTrabajo: puestoTrabajo[] = [];

  constructor(private puestoTrabajoService: PuestoTrabajoService) {}

  ngOnInit(): void {
    this.puestoTrabajoService.getPuestoTrabajo().subscribe((puestoTrabajo) => {
      this.puestoTrabajo = puestoTrabajo;
    });
  }
}
