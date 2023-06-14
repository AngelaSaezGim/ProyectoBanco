import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private clienteService:ClienteService, private router:Router){}

  //Escuchar evento
  validarLogin(){
    console.log("Validando..")
    //Servicio que se encargará de traer usuario que corresponda

    const usuario = this.clienteService.hacerLogin(this.usuario, this.password);
    if(usuario)
      {
      console.log("usuario logeado",usuario)
      //ir al dasboard (router)
      this.router.navigateByUrl("/pages/dashboard")
      }
    else
      {
      console.error("credenciales incorrectas");
      }
  }

}
