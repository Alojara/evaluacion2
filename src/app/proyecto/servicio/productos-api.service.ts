import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, ProductoConID, ProductoParcial } from './../modelo/productos';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosApiService {
  private URL_PRODUCTO = 'http://localhost:3000/productos';
  private paginaActual = 1;
  private comLista = new BehaviorSubject<Array<ProductoConID>>([]);
  public listaProductos$ = this.comLista.asObservable();
  constructor(
    private cliente: HttpClient
  ) { }

  public agregarProducto(producto: Producto){
    return this.cliente.post(this.URL_PRODUCTO,producto,{
      headers: {
        'Content-Type':'application/json;charset=utf-8'
      }
    })
  }

  public listarPrimerosElementos(){
    this.cliente.get<Array<ProductoConID>>(`${this.URL_PRODUCTO}?_page=1`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comLista.next(datos);
    });
  }

  public obtenerMasElementos(){
    this.cliente.get<Array<ProductoConID>>(`${this.URL_PRODUCTO}?_page=${this.paginaActual}`)
    .pipe(
      delay(3000)
    )
    .subscribe(datos => {
      if(datos){
        this.paginaActual = this.paginaActual + 1;
        this.comLista.next(this.comLista.getValue().concat(datos));
      }

    })
  }

  public obtenerProductoPorID(id: number): Observable<ProductoConID | null> {
    return this.cliente.get<ProductoConID | null>(`${this.URL_PRODUCTO}/${id}`);
  }

  public eliminarProductoPorID(id: number): Observable<any> {
      return this.cliente.delete(`${this.URL_PRODUCTO}/${id}`)
  }

  public modificarPorID(id: number, payload: ProductoParcial): Observable<any>{
    return this.cliente.patch(`${this.URL_PRODUCTO}/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
}
