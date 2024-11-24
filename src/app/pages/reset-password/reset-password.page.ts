import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  checkEmail() {

  }

  async resetPassword() {

    const alert = await this.alertCtrl.create({
      header: 'Correo Enviado',
      message: 'Un correo verificador se ha mandado a su dirección de correo.',
      buttons: ['OK'],
    });

    await alert.present();


    alert.onDidDismiss().then(() => {
      this.navCtrl.navigateBack('/login');
    });
  }
}
