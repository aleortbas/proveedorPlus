import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerrePage } from './ferre.page';

const routes: Routes = [
  {
    path: '',
    component: FerrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerrePageRoutingModule {}
