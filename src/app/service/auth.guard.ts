import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)


  if (typeof sessionStorage !== 'undefined' &&!sessionStorage.getItem('person')) {
    router.navigate(['/**']);
    return false;
  }
  else{
    return true;
  }
};
