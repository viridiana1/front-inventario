import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto, Usuario } from "../interfaces/gestion-interfaces";

@Injectable({
    providedIn:'root'
})


export class GestionServices{

    private base:string = "http://localhost:8080";
    constructor(private http: HttpClient){}

    consultaProducto():Observable<any>{
        return this.http.get(this.base+"/producto/productos");
    }

    insertaProducto(producto:Producto):Observable<any>{
        return this.http.post(this.base+"/producto/insertaProducto", producto);
    }

    eliminaProducto(producto:Producto):Observable<any>{
        return this.http.post(this.base+"/producto/eliminaProducto", producto);
    }


    validaUsuario(usuario:Usuario):Observable<any>{
        console.log(usuario);
        return this.http.post(this.base+"/usuario/validaUsuario", usuario);
    }
}