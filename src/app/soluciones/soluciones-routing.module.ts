import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolucionesPage } from './soluciones.page';

const routes: Routes = [
  {
    path: '',
    component: SolucionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolucionesPageRoutingModule {}
