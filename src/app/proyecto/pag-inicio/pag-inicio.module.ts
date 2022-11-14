import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProductosApiService } from '../servicio/productos-api.service'
import { PagInicioPageRoutingModule } from './pag-inicio-routing.module';

import { PagInicioPage } from './pag-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagInicioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PagInicioPage],
  providers:[ProductosApiService]
})
export class PagInicioPageModule {}
