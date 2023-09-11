// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-shop',
//   templateUrl: './shop.page.html',
//   styleUrls: ['./shop.page.scss'],
// })
// export class ShopPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

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
  minusSum() {

  }
}
