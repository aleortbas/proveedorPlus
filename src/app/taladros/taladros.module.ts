import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaladrosPageRoutingModule } from './taladros-routing.module';

import { TaladrosPage } from './taladros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaladrosPageRoutingModule
  ],
  declarations: [TaladrosPage]
})
export class TaladrosPageModule {}
