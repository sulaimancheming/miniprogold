import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop1PageRoutingModule } from './shop1-routing.module';

import { Shop1Page } from './shop1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop1PageRoutingModule
  ],
  declarations: [Shop1Page]
})
export class Shop1PageModule {}
