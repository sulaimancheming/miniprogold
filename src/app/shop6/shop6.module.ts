import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop6PageRoutingModule } from './shop6-routing.module';

import { Shop6Page } from './shop6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop6PageRoutingModule
  ],
  declarations: [Shop6Page]
})
export class Shop6PageModule {}
