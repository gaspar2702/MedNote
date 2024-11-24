import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { PatientService } from 'src/app/patient.service'; // Import the service

@NgModule({
  declarations: [
    AppComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), // Initialize IonicModule
    AppRoutingModule, // Include your routing module
  ],
  providers: [PatientService], // Register the PatientService
  bootstrap: [AppComponent]
})
export class AppModule {}


