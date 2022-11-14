import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { IonicModule } from '@ionic/angular';
import { ListarPageRoutingModule } from './listar-routing.module';
import {ProductosApiService} from '../servicio/productos-api.service'
import { ListarPage } from './listar.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListarPage],
  providers:[ProductosApiService]
})
export class ListarPageModule {}
