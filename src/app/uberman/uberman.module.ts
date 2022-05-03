import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbermanPageRoutingModule } from './uberman-routing.module';

import { UbermanPage } from './uberman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbermanPageRoutingModule
  ],
  declarations: [UbermanPage]
})
export class UbermanPageModule {}
