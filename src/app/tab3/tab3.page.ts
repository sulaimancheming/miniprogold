import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedataService } from '../services/sharedata.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private navCtrl: NavController,
    private shareDataServ: SharedataService) { }
  gotobankpage(bankname, imgbank) {
    const bank = { bankname, imgbank };
    this.shareDataServ.setSharedData(bank);
    this.navCtrl.navigateForward('scb');
  }
  ngOnInit() {
    console.log();
  }
}
