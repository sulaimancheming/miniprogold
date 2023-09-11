import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop7PageRoutingModule } from './shop7-routing.module';

import { Shop7Page } from './shop7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop7PageRoutingModule
  ],
  declarations: [Shop7Page]
})
export class Shop7PageModule {}
