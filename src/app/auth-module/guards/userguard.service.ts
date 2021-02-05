import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate{


  constructor(private auth: AuthenticationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    const userExists = !!this.auth.getLoggedUser();
    if(userExists && this.auth.getLoggedUser().role==='user')
      return true;
    else{
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
