import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbermanPage } from './uberman.page';

const routes: Routes = [
  {
    path: '',
    component: UbermanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbermanPageRoutingModule {}
