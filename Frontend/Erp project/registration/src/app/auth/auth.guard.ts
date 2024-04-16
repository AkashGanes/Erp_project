import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';
import { LoginSignupService } from '../service/login-signup.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const userAuthService:any=inject(UserAuthService)
  const loginService:any=inject(LoginSignupService)
  const router:any=inject(Router)

  if (userAuthService.getToken() !== null) {
    const role = route.data['roles'] as Array<string>;

    if (role) {
      const match = loginService.roleMatch(role);

      if (match) {
        return true;
      } else {
        router.navigate(['/forbidden']);
        return false;
      }
    }
  }

  router.navigate(['/login']);
  return false;

};
