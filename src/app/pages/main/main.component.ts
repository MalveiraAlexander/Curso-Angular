import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  textoExtra: string = 'Mundo';
  apellido: string = 'Bustos';
  array: string[] = ['Gustavo', 'Daniel', 'Carlos', 'Gabriela', 'Eduardo'];

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.textoExtra = 'Daniel';
  }

  changeName2() {
    this.textoExtra = `Carlos ${this.apellido}`
  }

}
