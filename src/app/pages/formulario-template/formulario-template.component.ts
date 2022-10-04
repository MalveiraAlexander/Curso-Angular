import { Component, OnInit } from '@angular/core';
import { UserModel } from '../formulario-reactivo/formulario-reactivo.component';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.scss']
})
export class FormularioTemplateComponent implements OnInit {

  user: UserModel = new UserModel();
  showData: boolean = false;
  isTerms: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  registrar(data: any) {
    console.log(data);
    this.showData = true;
  }

}
