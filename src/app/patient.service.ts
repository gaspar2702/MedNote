// patient.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:3000/patients'; // JSON server URL

  constructor(private http: HttpClient) {}

  // Obtener todos los pacientes
  getPatients(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener pacientes por email (citas específicas por paciente)
  getPatientsByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`);
  }

  createPatient(patientData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, patientData);
  }

  updatePatient(id: number, patientData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, patientData);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

