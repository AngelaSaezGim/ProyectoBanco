import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //almacenar los campos
  usuario: string="";
  password: string="";

  //constructor
  constructor(private clienteService:ClienteService){}

  //Escuchar evento
  validarLogin(){
    console.log("Validando..")
    //Servicio que se encargará de traer usuario que corresponda

    const usuario = this.clienteService.hacerLogin(this.usuario, this.password);
    if(usuario)
      {
      console.log("usuario logeado",usuario)
      }
    else
      {
      console.error("credenciales incorrectas");
      }
  }

}
