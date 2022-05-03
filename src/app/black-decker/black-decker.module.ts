import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackDeckerPageRoutingModule } from './black-decker-routing.module';

import { BlackDeckerPage } from './black-decker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackDeckerPageRoutingModule
  ],
  declarations: [BlackDeckerPage]
})
export class BlackDeckerPageModule {}
