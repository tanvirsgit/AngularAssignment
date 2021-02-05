import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {


  constructor(private auth: AuthenticationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    const userExists = !!this.auth.getLoggedUser();
    if(userExists && this.auth.getLoggedUser().role==='admin')
      return true;
    else{
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
