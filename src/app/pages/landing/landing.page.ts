import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service'; 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  userName: string = '';
  userEmail: string = ''; 
  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {

    this.userEmail = localStorage.getItem('userName') || ''; 
    this.userName = this.userEmail || 'Invitado';

    if (this.userEmail) {
      this.loadPatients();
    }
  }

  loadPatients() {
    this.patientService.getPatientsByEmail(this.userEmail).subscribe((data: any[]) => {
      this.patients = data;
    });
  }
}
