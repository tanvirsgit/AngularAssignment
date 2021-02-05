import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth-module/authentication.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser:User;
  constructor(private auth:AuthenticationService) {
    this.currentUser = auth.getLoggedUser();
  }

  ngOnInit(): void {
  }

}
