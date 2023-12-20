import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/modelos/candidato.model';
import { CandidatoService } from 'src/app/servicios/candidato/candidato.service';

@Component({
  selector: 'app-formulario-candidato',
  templateUrl: './formulario-candidato.component.html',
  styleUrls: ['./formulario-candidato.component.css']
})
export class FormularioCandidatoComponent implements OnInit {
  candidato: Candidato = { nombre: '', telefono: '', apellidos: '', direccion: '', dni: '', fechaNacimiento: '', mail: '' };

  constructor(private route: ActivatedRoute, private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    const candidatoDNI = this.route.snapshot.paramMap.get('id');
    if (candidatoDNI) {
      this.cargarCandidato(candidatoDNI);
    }
  }

  cargarCandidato(candidatoDNI: string): void {
    this.candidatoService.getCandidato(candidatoDNI).subscribe(
      (candidato) => {
        this.candidato = candidato;
      },
      (error) => {
        console.error('Error al obtener candidato:', error);
      }
    );
  }

  guardarCambios(): void {
    if (this.candidato.dni) {
           // Agregar un nuevo candidato
      this.candidatoService.agregarCandidato(this.candidato).then(
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
