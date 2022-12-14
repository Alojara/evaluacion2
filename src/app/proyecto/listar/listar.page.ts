import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoConID } from '../modelo/productos';
import { ProductosApiService } from '../servicio/productos-api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public productos: Array<ProductoConID> = [];
  constructor(
    private apiProd: ProductosApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apiProd.listarPrimerosElementos()
    this.apiProd.listaProductos$.subscribe(datosActualizados => {
      this.productos = datosActualizados;
      if(this.scroll){
        this.scroll.complete();
      }
    })
  }
  public cargarMasDatos(){
    this.apiProd.obtenerMasElementos();
  }
}
