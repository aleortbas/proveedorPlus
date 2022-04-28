import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pruebas2PageRoutingModule } from './pruebas2-routing.module';

import { Pruebas2Page } from './pruebas2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pruebas2PageRoutingModule
  ],
  declarations: [Pruebas2Page]
})
export class Pruebas2PageModule {}
