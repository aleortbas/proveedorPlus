import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackDeckerPage } from './black-decker.page';

const routes: Routes = [
  {
    path: '',
    component: BlackDeckerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackDeckerPageRoutingModule {}
