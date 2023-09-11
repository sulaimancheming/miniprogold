import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScbPage } from './scb.page';

const routes: Routes = [
  {
    path: '',
    component: ScbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScbPageRoutingModule {}
