import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private authService: AuthService 
  ) {}

  async signup() {
    if (this.password !== this.confirmPassword) {
      this.presentToast('Las contraseñas no coinciden.');
      return;
    }

    try {
      await this.authService.signup(this.email, this.password);
      this.presentToast('Registro exitoso, bienvenido!');
      this.navCtrl.navigateForward('/login'); 
    } catch (error) {
      this.presentToast('Error en el registro. Intenta nuevamente.');
    }
  }

  redirectToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    await toast.present();
  }
}