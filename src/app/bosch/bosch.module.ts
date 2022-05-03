import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoschPageRoutingModule } from './bosch-routing.module';

import { BoschPage } from './bosch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoschPageRoutingModule
  ],
  declarations: [BoschPage]
})
export class BoschPageModule {}
