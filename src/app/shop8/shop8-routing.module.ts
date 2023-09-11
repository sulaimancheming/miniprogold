import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop8Page } from './shop8.page';

const routes: Routes = [
  {
    path: '',
    component: Shop8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop8PageRoutingModule {}
