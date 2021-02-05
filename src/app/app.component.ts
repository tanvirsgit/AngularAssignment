import { Component } from '@angular/core';
import { AuthenticationService } from './auth-module/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'User Management Application';
  constructor(public auth:AuthenticationService) {
  
  }
  
  onLogout(){
    this.auth.logout();
  }
}
