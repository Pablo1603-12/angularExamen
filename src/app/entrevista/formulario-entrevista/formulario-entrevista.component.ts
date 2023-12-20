import { Component } from '@angular/core';
import { entrevista } from 'src/app/modelos/entrevista.model';
import { ActivatedRoute } from '@angular/router';

import { EntrevistasService } from 'src/app/servicios/entrevistas/entrevistas.service';

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
candidatos: any;
puesto: any;

  constructor(private route: ActivatedRoute, private entrevistaService: EntrevistasService) { }

  ngOnInit(): void {
    const entrevista = this.route.snapshot.paramMap.get('id');
    if (entrevista) {
      this.cargarEntrevista(entrevista);
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

  guardarCambios(): void {
    if (this.entrevista) {
           // Agregar una entrevista
      this.entrevistaService.agregarEntrevista(this.entrevista).then(
        () => {
          console.log('Candidato agregado con éxito.');
        },
        (error) => {
          console.error('Error al agregar nuevo candidato:', error);
        }
      );
    }
  }
}
