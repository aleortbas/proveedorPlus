import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolucionesPageRoutingModule } from './soluciones-routing.module';

import { SolucionesPage } from './soluciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolucionesPageRoutingModule
  ],
  declarations: [SolucionesPage]
})
export class SolucionesPageModule {}
