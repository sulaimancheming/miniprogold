import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { SharedataService } from './../services/sharedata.service';

@Component({
  selector: 'app-scb',
  templateUrl: './scb.page.html',
  styleUrls: ['./scb.page.scss'],
})
export class ScbPage implements OnInit {
  bankInfo: any;
  documents: Array<any>;
  monney: number;
  constructor(private firestore: Firestore, private navCtrl: NavController,
    private shareDataServ: SharedataService
  ) {
    const collectionRef = collection(firestore, 'member');
    collectionData(collectionRef, { idField: 'slm' }).subscribe(response => {
      this.documents = response;
    });

  }

  ngOnInit() {
    this.bankInfo = this.shareDataServ.getSharedData();
    console.log(this.bankInfo);


  }
  backtotamraikanpage() {
    this.navCtrl.navigateBack('tabs/tab3');
  }
  addData(myForm) {
    const document = {
      billId: 'C031973',
      date: Date.now(),
      monney: myForm.monney,
      member: 'นูรุลฮูดา เป๊าะแล๊ะ'
    };
    const collectionRef = collection(this.firestore, 'member');
    addDoc(collectionRef, document);
  }
  gotoUpdatetab2Page() {
    this.navCtrl.navigateBack('tabs/tab2');
  }
}
