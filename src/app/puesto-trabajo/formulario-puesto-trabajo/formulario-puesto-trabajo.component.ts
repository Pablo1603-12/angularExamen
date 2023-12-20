import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { puestoTrabajo } from 'src/app/modelos/puestoTrabajo.model';
import { PuestoTrabajoService } from 'src/app/servicios/puestoTrabajo/puesto-trabajo.service';

@Component({
  selector: 'app-formulario-puesto-trabajo',
  templateUrl: './formulario-puesto-trabajo.component.html',
  styleUrls: ['./formulario-puesto-trabajo.component.css']
})
export class FormularioPuestoTrabajoComponent {
  puestoTrabajo: puestoTrabajo = {puesto:'', disponible: true, empresa: ''};

  constructor(private route: ActivatedRoute, private puestoTrabajoService: PuestoTrabajoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarPuestoTrabajo(id);
    }
  }
  cargarPuestoTrabajo(id: string): void {
    this.puestoTrabajoService.getPuestosTrabajo(id).subscribe(
      (puestoTrabajo) => {
        this.puestoTrabajo = puestoTrabajo;
      },
      (error) => {
        console.error('Error al obtener puesto trabajo:', error);
      }
    );
  }

  guardarCambios(): void {
    if (this.puestoTrabajo) {
           // Agregar un nuevo puesto trabajo
      this.puestoTrabajoService.agregarPuestoTrabajo(this.puestoTrabajo).then(
        () => {
          console.log('Puesto trabajo agregado con éxito.');
        },
        (error) => {
          console.error('Error al agregar nuevo puesto trabajo:', error);
        }
      );
    }
  }
}
