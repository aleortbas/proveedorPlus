import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestornilladoresPageRoutingModule } from './destornilladores-routing.module';

import { DestornilladoresPage } from './destornilladores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestornilladoresPageRoutingModule
  ],
  declarations: [DestornilladoresPage]
})
export class DestornilladoresPageModule {}
