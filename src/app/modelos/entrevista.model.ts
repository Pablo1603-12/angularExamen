import { Candidato } from "./candidato.model"; 
import { puestoTrabajo } from "./puestoTrabajo.model";  

export interface entrevista {
        fecha: string;
        candidato?: Candidato[];
        puesto?: puestoTrabajo[];
        realizada?: boolean
      }