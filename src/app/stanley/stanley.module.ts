import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StanleyPageRoutingModule } from './stanley-routing.module';

import { StanleyPage } from './stanley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StanleyPageRoutingModule
  ],
  declarations: [StanleyPage]
})
export class StanleyPageModule {}
