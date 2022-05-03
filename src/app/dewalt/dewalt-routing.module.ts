import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DewaltPage } from './dewalt.page';

const routes: Routes = [
  {
    path: '',
    component: DewaltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DewaltPageRoutingModule {}
