import { Injectable } from '@angular/core';
import { Vuelo } from '../models/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor() { }

  addVuelo(vuelo: Vuelo) {
    let vuelos: Vuelo[] = [];
    if (JSON.parse(sessionStorage.getItem(`vuelos`))) {
      vuelos = JSON.parse(sessionStorage.getItem(`vuelos`));
    }
    vuelos.push(vuelo);
    sessionStorage.setItem(`vuelos`, JSON.stringify(vuelos));
  }

  removeVuelo(id: string) {
    let vuelos: Vuelo[] = JSON.parse(sessionStorage.getItem(`vuelos`));
    let vuelosAux: Vuelo[] = vuelos.filter(x => x.id != id);
    sessionStorage.setItem(`vuelos`, JSON.stringify(vuelosAux));
  }

  getVuelo(id: string): Vuelo {
    let vuelos: Vuelo[] = JSON.parse(sessionStorage.getItem(`vuelos`));
    let vuelo: Vuelo = vuelos.find(x => x.id == id);
    return vuelo;
  }

  getAllVuelos(): Vuelo[] {
    let vuelos =  JSON.parse(sessionStorage.getItem(`vuelos`));
    return vuelos;
  }

}
