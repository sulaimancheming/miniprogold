import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScbPageRoutingModule } from './scb-routing.module';

import { ScbPage } from './scb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScbPageRoutingModule
  ],
  declarations: [ScbPage]
})
export class ScbPageModule {}
