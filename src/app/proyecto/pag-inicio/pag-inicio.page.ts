import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { ProductoConID } from '../modelo/productos';
import { ProductosApiService } from '../servicio/productos-api.service';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.page.html',
  styleUrls: ['./pag-inicio.page.scss'],
})
export class PagInicioPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public productos: Array<ProductoConID> = [];
  constructor(
    private servicio: ProductosApiService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.servicio.listarPrimerosElementos()
    this.servicio.listaProductos$.subscribe(datosActualizados => {
      this.productos = datosActualizados;
      if(this.scroll){
        this.scroll.complete();
      }
    })
  }
  public cargarMasDatos(){
    this.servicio.obtenerMasElementos();
  }
}
