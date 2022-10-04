import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vuelo } from 'src/app/models/vuelo';
import { ComponentsService } from 'src/app/services/components.service';
import { VuelosService } from 'src/app/services/vuelos.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  vueloForm: FormGroup;
  vuelos: Vuelo[];
  showData: boolean = false;

  constructor(private vueloService: VuelosService, private example: ComponentsService) { }

  ngOnInit(): void {
    this.createForm();
    this.getVuelos();
    this.escucha();
  }

  escucha() {
    this.example.addVueloEvento.subscribe((data: Vuelo) => {
      this.vueloService.addVuelo(data);
      this.getVuelos();
    });
  }


  test() {
    console.log("Hola");
  }
  getVuelos() {
    this.vuelos = [];
    this.vuelos = this.vueloService.getAllVuelos();
    this.showData = true;
  }

  add() {
    let vuelo = new Vuelo();
    vuelo.code = this.vueloForm.value['code'];
    vuelo.acientos = this.vueloForm.value['acientos'];
    vuelo.destino = this.vueloForm.value['destino'];
    vuelo.fecha = this.vueloForm.value['fecha'];
    vuelo.origen = this.vueloForm.value['origen'];
    vuelo.id = uuidv4();
    this.vueloService.addVuelo(vuelo);
    this.getVuelos();
  }

  viewData(id: string) {
    let value = this.vueloService.getVuelo(id);
    console.log(value);
  }

  private createForm() {
    this.vueloForm = new FormGroup({
      code: new FormControl("", [Validators.required, Validators.maxLength(5)]),
      origen: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      destino: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      acientos: new FormControl(25, [Validators.required, Validators.min(25), Validators.max(100)]),
      fecha: new FormControl(null, [Validators.required]),
    });
  }

}
