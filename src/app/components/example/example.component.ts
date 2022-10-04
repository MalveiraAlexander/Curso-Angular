import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vuelo } from 'src/app/models/vuelo';
import { ComponentsService } from 'src/app/services/components.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Output() addVueloEvento: EventEmitter<Vuelo> = new EventEmitter();
  constructor(private example: ComponentsService) { }

  ngOnInit(): void {
  }

  execute() {
    let vuelo = new Vuelo();
    let date = new Date();
    vuelo.code = 'AD-50';
    vuelo.acientos = 150;
    vuelo.destino = 'Posadas, Misiones, Argentina';
    vuelo.fecha = date;
    vuelo.origen = 'Ushuaia, Tierra del Fuego, Argentina';
    vuelo.id = uuidv4();
    this.example.addVueloEvento.emit(vuelo);
    console.log("Siguiente");
    this.addVueloEvento.emit(vuelo);
  }

}
