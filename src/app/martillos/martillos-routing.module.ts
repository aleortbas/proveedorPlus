import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MartillosPage } from './martillos.page';

const routes: Routes = [
  {
    path: '',
    component: MartillosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MartillosPageRoutingModule {}
