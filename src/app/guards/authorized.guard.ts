import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

export const authorizedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);


  if (authService.isAuthorized) {
    return true;
  }
  return router.parseUrl('/login');
};