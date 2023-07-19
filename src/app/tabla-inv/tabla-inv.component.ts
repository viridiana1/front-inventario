import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-inv',
  templateUrl: './tabla-inv.component.html',
  styleUrls: ['./tabla-inv.component.css']
})
export class TablaInvComponent {


  constructor(private router:Router){

  }

  public ejemploProductos =
    [
      {
        "nombreProducto": "Oso Peluche",
        "codigoProducto": "JG01",
        "cantidadProducto": "1500",
        "categoriaProducto": "JG"
      },
      {
        "nombreProducto": "Muñeca Grande",
        "codigoProducto": "JG07",
        "cantidadProducto": "200",
        "categoriaProducto": "JG"
      },
      {
        "nombreProducto": "Bocina",
        "codigoProducto": "EL08",
        "cantidadProducto": "100",
        "categoriaProducto": "EL"
      },
      {
        "nombreProducto": "Libreta profesional raya",
        "codigoProducto": "PP15",
        "cantidadProducto": "2000",
        "categoriaProducto": "PP"
      },
      {
        "nombreProducto": "Carro chico",
        "codigoProducto": "JG06",
        "cantidadProducto": "300",
        "categoriaProducto": "JG"
      },
      {
        "nombreProducto": "Adaptador USB",
        "codigoProducto": "EL02",
        "cantidadProducto": "10000",
        "categoriaProducto": "EL"
      },

    ]




    agregarProducto(){
      this.router.navigate(['agrega-producto']);
    }
}
