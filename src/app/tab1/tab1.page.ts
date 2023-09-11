import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { sign } from 'crypto';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  documents: Array<any>;
  sum: number;
  constructor(private navCtrl: NavController, private firestore: Firestore) {
    const collectionRef = collection(firestore, 'member');
    collectionData(collectionRef, { idField: 'doc_id' }).subscribe(response => {
      this.sum = 0;
      this.documents = response;
      console.log(this.documents);

      for (const document of this.documents) {
        console.log(document.monney);
        this.sum += Number(document.monney);
      }

    });

  }

  ngOnInit() {
  }

  gotoShopPage() {
    this.navCtrl.navigateForward('shop');
  }
  gotoShop1Page() {
    this.navCtrl.navigateForward('shop1');
  }
  gotoShop2Page() {
    this.navCtrl.navigateForward('shop2');
  }
  gotoShop3Page() {
    this.navCtrl.navigateForward('shop3');
  }
  gotoShop4Page() {
    this.navCtrl.navigateForward('shop4');
  }
  gotoShop5Page() {
    this.navCtrl.navigateForward('shop5');
  }
  gotoShop6Page() {
    this.navCtrl.navigateForward('shop6');
  }
  gotoShop7Page() {
    this.navCtrl.navigateForward('shop7');
  }
  gotoShop8Page() {
    this.navCtrl.navigateForward('shop8');
  }

}
