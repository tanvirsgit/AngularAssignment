import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedUser: User=null;
  constructor(private router:Router, private userSvc: UserService) { }

  login(email:string, password:string){
    this.userSvc.login(email,password).subscribe(
      u=> {
        if(!u)
          return;
        this.loggedUser = u;
        localStorage.setItem('user', JSON.stringify(this.loggedUser));
        console.log(this.loggedUser);
        if(u.role==='admin')
          this.router.navigate(['/users']);
        else if(u.role==='user')
          this.router.navigate(['/profile']);
      }
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.loggedUser=null;
    this.router.navigate(['/signin']);
  }

  redirect(){
    if(!!this.loggedUser){
      if(this.loggedUser.role==='admin'){
        this.router.navigate(['/users']);
        console.log("Redirected as admin");
      }
        
      else
        this.router.navigate(['/profile']);
    }
  }

  getLoggedUser():User{
    return this.loggedUser;
  }

}
