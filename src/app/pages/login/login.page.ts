import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  role: string | null = ''; 

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private authService: AuthService  
  ) {}

  ngOnInit() {
    
    this.role = localStorage.getItem('selectedRole');
  }

  async login() {
    const isAuthenticated = await this.authService.login(this.email, this.password);
    
    if (isAuthenticated) {
      localStorage.setItem('userName', this.email);
      this.presentToast(`Bienvenido, ${this.email}`);
      
   
      if (this.role === 'profesional') {
        this.navCtrl.navigateForward('/proflanding'); 
      } else if (this.role === 'paciente') {
        this.navCtrl.navigateForward('/landing'); 
      } else {
        this.navCtrl.navigateForward('/landing'); 
      }
    } else {
      this.presentToast('Credenciales inválidas, intenta de nuevo.');
    }
  }

  redirectToSignup() {
    this.navCtrl.navigateForward('/signup');
  }

  redirectToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      position: 'bottom'
    });
    await toast.present();
  }
}


