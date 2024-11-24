import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProflandingPageRoutingModule } from './proflanding-routing.module';
import { ProflandingPage } from './proflanding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProflandingPageRoutingModule
  ],
  declarations: [ProflandingPage]
})
export class ProflandingPageModule {}

