import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FerrePageRoutingModule } from './ferre-routing.module';

import { FerrePage } from './ferre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerrePageRoutingModule
  ],
  declarations: [FerrePage]
})
export class FerrePageModule {}
