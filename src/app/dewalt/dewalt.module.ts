import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DewaltPageRoutingModule } from './dewalt-routing.module';

import { DewaltPage } from './dewalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DewaltPageRoutingModule
  ],
  declarations: [DewaltPage]
})
export class DewaltPageModule {}
