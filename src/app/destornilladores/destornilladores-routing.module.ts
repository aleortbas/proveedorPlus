import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestornilladoresPage } from './destornilladores.page';

const routes: Routes = [
  {
    path: '',
    component: DestornilladoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestornilladoresPageRoutingModule {}
