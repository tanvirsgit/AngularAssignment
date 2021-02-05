import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  user :User;
  loggedUser:User;
  date: Date;
  wrongCredentials:boolean;
  constructor(private auth:AuthenticationService,private route: Router) {
   }

  ngOnInit(): void {
    this.wrongCredentials=false;
    this.auth.redirect();
    this.signinForm=new FormGroup({
      'email':new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    if(this.signinForm.invalid){
      alert("Invalid inputs");
      return;
    }
    this.user = new User(this.signinForm.value);
    this.auth.login(encodeURIComponent(this.user.email),this.user.password);
  }

}
