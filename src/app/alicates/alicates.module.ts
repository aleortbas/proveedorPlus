import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlicatesPageRoutingModule } from './alicates-routing.module';

import { AlicatesPage } from './alicates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlicatesPageRoutingModule
  ],
  declarations: [AlicatesPage]
})
export class AlicatesPageModule {}
