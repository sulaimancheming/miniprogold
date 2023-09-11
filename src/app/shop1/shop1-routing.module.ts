import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop1Page } from './shop1.page';

const routes: Routes = [
  {
    path: '',
    component: Shop1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop1PageRoutingModule {}
