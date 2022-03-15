import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetrosPage } from './metros.page';

const routes: Routes = [
  {
    path: '',
    component: MetrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetrosPageRoutingModule {}
