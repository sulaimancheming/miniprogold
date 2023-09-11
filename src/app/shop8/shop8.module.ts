import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop8PageRoutingModule } from './shop8-routing.module';

import { Shop8Page } from './shop8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop8PageRoutingModule
  ],
  declarations: [Shop8Page]
})
export class Shop8PageModule {}
