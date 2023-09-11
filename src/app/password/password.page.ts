
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoTab4Page() {
    this.navCtrl.navigateBack('tabs/tab4');
  }

}
