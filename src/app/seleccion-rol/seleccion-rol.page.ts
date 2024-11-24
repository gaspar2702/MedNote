import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seleccion-rol',
  templateUrl: './seleccion-rol.page.html',
  styleUrls: ['./seleccion-rol.page.scss'],
})
export class SeleccionRolPage {
  constructor(private navCtrl: NavController) {}

  goToLogin(role: string) {

    localStorage.setItem('selectedRole', role);

    this.navCtrl.navigateForward(`/login/${role}`);
  }
}



