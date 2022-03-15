import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetrosPageRoutingModule } from './metros-routing.module';

import { MetrosPage } from './metros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetrosPageRoutingModule
  ],
  declarations: [MetrosPage]
})
export class MetrosPageModule {}
