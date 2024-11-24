import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}


  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      
      const storedEmail = localStorage.getItem('registeredEmail');
      const storedPassword = localStorage.getItem('registeredPassword');
  

      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

signup(email: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (email && password) {
      console.log('Usuario registrado con éxito:', email);


      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('registeredEmail', email);
      localStorage.setItem('registeredPassword', password); 
      resolve(); 
    } else {
      reject('Error al registrar');
    }
  });
  }
}
