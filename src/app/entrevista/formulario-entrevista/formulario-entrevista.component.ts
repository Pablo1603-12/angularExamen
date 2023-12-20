import { Component } from '@angular/core';
import { entrevista } from 'src/app/modelos/entrevista.model';
import { ActivatedRoute } from '@angular/router';

import { EntrevistasService } from 'src/app/servicios/entrevistas/entrevistas.service';
import { CandidatoService } from 'src/app/servicios/candidato/candidato.service';
import { PuestoTrabajoService } from 'src/app/servicios/puestoTrabajo/puesto-trabajo.service';


@Component({
  selector: 'app-formulario-entrevista',
  templateUrl: './formulario-entrevista.component.html',
  styleUrls: ['./formulario-entrevista.component.css']
})
export class FormularioEntrevistaComponent {

  
  entrevista: entrevista = {
    fecha: '',
    
    realizada: undefined
  };

  candidatos: any[] = [];
  puestosTrabajo: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private entrevistaService: EntrevistasService,
    private candidatoService: CandidatoService,
    private puestoTrabajoService: PuestoTrabajoService
  ) {}

  ngOnInit(): void {
    const entrevistaId = this.route.snapshot.paramMap.get('id');
    if (entrevistaId) {
      this.cargarEntrevista(entrevistaId);
      this.obtenerCandidatos(); // Asegúrate de implementar este método
      this.obtenerPuestosTrabajo(); // Asegúrate de implementar este método
    }
  }
  

  cargarEntrevista(entrevista: string): void {
    this.entrevistaService.getEntrevistas(entrevista).subscribe(
      (entrevista) => {
        this.entrevista = entrevista;
      },
      (error) => {
        console.error('Error al obtener entrevista:', error);
      }
    );
  }
  obtenerCandidatos(): void {
    this.candidatoService.getCandidatos().subscribe(
      (candidatos) => {
        this.candidatos = candidatos;
      },
      (error) => {
        console.error('Error al obtener candidatos:', error);
      }
    );
  }

  obtenerPuestosTrabajo(): void {
    this.puestoTrabajoService.getPuestoTrabajo().subscribe(
      (puestosTrabajo) => {
        this.puestosTrabajo = puestosTrabajo;
      },
      (error) => {
        console.error('Error al obtener puestos de trabajo:', error);
      }
    );
  }

  guardarCambios(): void {
    if (this.entrevista) {
           // Agregar una entrevista
      this.entrevistaService.agregarEntrevista(this.entrevista).then(
        () => {
          console.log('entrevista agregada con éxito.');
        },
        (error) => {
          console.error('Error al agregar nueva entrevista', error);
        }
      );
    }
  }
}
