import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop6Page } from './shop6.page';

const routes: Routes = [
  {
    path: '',
    component: Shop6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop6PageRoutingModule {}
