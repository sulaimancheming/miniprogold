import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatePipe } from '@angular/common';

import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: 'AIzaSyB7Ywf2BToooggo_t6Vm21kirYOq85sphs',
      authDomain: 'minipro-1520f.firebaseapp.com',
      projectId: 'minipro-1520f',
      storageBucket: 'minipro-1520f.appspot.com',
      messagingSenderId: '977056300681',
      appId: '1:977056300681:web:86e333ead20e0690729058',
      measurementId: 'G-EYSW8LJLTY'})),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
