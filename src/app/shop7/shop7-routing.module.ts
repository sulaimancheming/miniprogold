import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop7Page } from './shop7.page';

const routes: Routes = [
  {
    path: '',
    component: Shop7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop7PageRoutingModule {}
