import { Component, OnInit , OnDestroy } from '@angular/core';
import { GestionServices } from '../services/gestion-services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from '../interfaces/gestion-interfaces';

@Component({
  selector: 'app-alta-prod',
  templateUrl: './alta-prod.component.html',
  styleUrls: ['./alta-prod.component.css']
})
export class AltaProdComponent implements OnInit ,  OnDestroy {

  nomProd : string = "";
  serProd : string = "";
  cantProd : string = "";
  catProd : string = "";

  private serviceSubs : Subscription = new Subscription;
  constructor(private gestionServices : GestionServices, private router : Router){

  }
  ngOnInit(): void {
    
  }

  

  validaNumber(){
    var reg = /^\d+$/;
    var pattern = new RegExp(/^\d+$/);
    if(!pattern.test(this.cantProd)){
      this.cantProd = "";
    }
  }

  altaProd(){
    let prod  = {} as Producto;
    prod.cantidadProducto = this.cantProd;
    prod.categoriaProducto = this.catProd;
    prod.codigoProducto = this.serProd;
    prod.nombreProducto = this.nomProd;
    this.serviceSubs = this.gestionServices.insertaProducto(prod).subscribe({
      next:(resp:any)=>{
        console.log(resp);
        if(resp){
          this.router.navigate(['inventario']);
        }else{
          alert("No se ha podido insertar el producto");
        }
      },
      error:()=>{
        alert("No se ha podido insertar el producto");
      }
    });
  }

  inicializarVariables(){
    this.nomProd  = "";
    this.serProd  = "";
    this.cantProd  = "";
    this.catProd  = "";
  }

  ngOnDestroy(){
    this.inicializarVariables();
  }


}
