import { Component } from '@angular/core';
import { GestionServices } from '../services/gestion-services';
import { Subscription } from 'rxjs';
import { Usuario } from '../interfaces/gestion-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent {

  login:boolean = true;
  mailLogin: string = "";
  passLogin:string="";
  nomReg:string="";
  mailReg:string="";
  passReg:string="";
  pass2Reg:string="";
  
  private gestionSubs : Subscription = new Subscription;
  private prodSubs : Subscription = new Subscription;

  constructor(private gestionServices : GestionServices, private router : Router){
    this.prodSubs = gestionServices.consultaProducto().subscribe({
      next:(resp:any)=>{
        console.log(resp);
      }
    });
  }

  validarAcceso(){
    let usr = {} as Usuario ;
    usr.nombreUsuario =  this.nomReg;
    usr.passUsuario = this.passLogin;
    console.log(usr);
    this.gestionSubs = this.gestionServices.validaUsuario(usr).subscribe({
      next:(resp:any)=>{
        console.log(resp);
        if(resp){
          this.router.navigate(['inventario']);
        }else{
          alert("No se ha podido validar el usuario");
        }
      },
      error:()=>{
        alert("No se ha podido validar el usuario");
      }
    });

  }

}
