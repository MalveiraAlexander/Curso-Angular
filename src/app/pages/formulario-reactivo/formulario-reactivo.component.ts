import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  userForm: FormGroup;
  showData: boolean = false;
  user: UserModel;
  constructor() { }



  ngOnInit(): void {
    this.createForm();
  }

  registrar() {
    console.log(this.userForm);
    this.user = new UserModel();
    this.user.email = this.userForm.value['email'];
    this.user.password = this.userForm.value['pass'];
    this.user.user = this.userForm.value['username'];
    this.user.phone = this.userForm.value['celular'];
    this.showData = true;
  }


  private createForm() {
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      username: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
      celular: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(13), Validators.pattern(/^d+$/)]),
      pass: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]),
      terms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

}

export class UserModel {
  email: string;
  user: string;
  password: string;
  phone: string;
}
