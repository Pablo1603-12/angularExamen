import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/modelos/candidato.model';
import { CandidatoService } from 'src/app/servicios/candidato/candidato.service';

@Component({
  selector: 'app-listar-candidato',
  templateUrl: './listar-candidato.component.html',
  styleUrls: ['./listar-candidato.component.css']
})
export class ListarCandidatoComponent implements OnInit {
  candidatos: Candidato[] = [];

  constructor(private CandidatoService: CandidatoService) {}

  ngOnInit(): void {
    this.CandidatoService.getCandidatos().subscribe((candidatos) => {
      this.candidatos = candidatos;
    });
  }
}
