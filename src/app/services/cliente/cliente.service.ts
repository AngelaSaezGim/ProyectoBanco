import { Injectable } from '@angular/core';
import { clientes } from 'src/app/datos/usuarios-ejemplo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  //Funcion que nos permita hacer el login - validar si existe el usuario en la base de datos - localstorage
  hacerLogin(usuario:string,password:string){
    for(let i =0;i<clientes.length;i++){
      const cliente = clientes[i];

      if(usuario == cliente.usuario && password == cliente.password)
        {
          return cliente;
        }
    }
    return null;
}
}