import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shop5PageRoutingModule } from './shop5-routing.module';

import { Shop5Page } from './shop5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop5PageRoutingModule
  ],
  declarations: [Shop5Page]
})
export class Shop5PageModule {}
