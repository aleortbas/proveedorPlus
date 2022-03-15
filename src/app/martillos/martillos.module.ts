import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MartillosPageRoutingModule } from './martillos-routing.module';

import { MartillosPage } from './martillos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MartillosPageRoutingModule
  ],
  declarations: [MartillosPage]
})
export class MartillosPageModule {}
