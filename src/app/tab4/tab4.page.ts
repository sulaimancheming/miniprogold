import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoPasswordPage() {
    this.navCtrl.navigateForward('password');
  }
  gotoLoginPage() {
    this.navCtrl.navigateForward('login');
  }

}
