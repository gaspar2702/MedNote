import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-proflanding',
  templateUrl: './proflanding.page.html',
  styleUrls: ['./proflanding.page.scss'],
})
export class ProflandingPage implements OnInit {
  patients: any[] = [];
  patientData: any = { name: '', email: '', appointmentTime: '', appointmentDate: '' };
  isEditing: boolean = false;
  editingPatientId: number | undefined;
  userName: string = '';

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Usuario';
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getPatients().subscribe((data: any[]) => {
      this.patients = data;
    });
  }

  onCreate() {
    if (
      !this.patientData.name ||
      !this.patientData.email ||
      !this.patientData.appointmentTime ||
      !this.patientData.appointmentDate
    ) {
      return;
    }

    if (this.isEditing) {
      this.updatePatient();
    } else {
      this.patientService.createPatient(this.patientData).subscribe(() => {
        this.loadPatients();
        this.resetForm();
      });
    }
  }

  onModify(patient: any) {
    this.patientData = { ...patient };
    this.isEditing = true;
    this.editingPatientId = patient.id;
  }

  updatePatient() {
    if (this.editingPatientId != null) {
      this.patientService.updatePatient(this.editingPatientId, this.patientData).subscribe(() => {
        this.loadPatients();
        this.resetForm();
      });
    }
  }

  onDelete(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.loadPatients();
    });
  }

  resetForm() {
    this.patientData = { name: '', email: '', appointmentTime: '', appointmentDate: '' };
    this.isEditing = false;
    this.editingPatientId = undefined;
  }
}

