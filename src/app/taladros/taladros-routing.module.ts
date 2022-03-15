import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaladrosPage } from './taladros.page';

const routes: Routes = [
  {
    path: '',
    component: TaladrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaladrosPageRoutingModule {}
