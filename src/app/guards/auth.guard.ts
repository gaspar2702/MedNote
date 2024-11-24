import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    const router = inject(Router);  // Get the Router instance
    router.navigate(['/notfound']);  // Redirect to Not Found if not authenticated
  }

  return isAuthenticated; // Allow or deny access based on authentication status
};

