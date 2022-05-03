import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanleyPage } from './stanley.page';

const routes: Routes = [
  {
    path: '',
    component: StanleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanleyPageRoutingModule {}
