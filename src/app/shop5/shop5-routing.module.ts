import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop5Page } from './shop5.page';

const routes: Routes = [
  {
    path: '',
    component: Shop5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop5PageRoutingModule {}
