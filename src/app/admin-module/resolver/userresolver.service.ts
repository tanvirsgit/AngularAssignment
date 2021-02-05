import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserresolverService implements Resolve<User[]> {

  constructor(private userSvc:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[]{
    return this.userSvc.getUsers();
  }
}
