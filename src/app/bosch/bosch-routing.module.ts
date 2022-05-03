import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoschPage } from './bosch.page';

const routes: Routes = [
  {
    path: '',
    component: BoschPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoschPageRoutingModule {}
