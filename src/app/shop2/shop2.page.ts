// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-shop2',
//   templateUrl: './shop2.page.html',
//   styleUrls: ['./shop2.page.scss'],
// })
// export class Shop2Page implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shop2',
  templateUrl: './shop2.page.html',
  styleUrls: ['./shop2.page.scss'],
})
export class Shop2Page implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoTab1Page() {
    this.navCtrl.navigateBack('tabs/tab1');
  }
  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'ยืนยัน',
      message: 'การแลกซื้อของคุณ!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
