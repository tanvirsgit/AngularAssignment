import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { isEmailTaken } from '../../shared-module/takenemail.directive';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  roles=['user','admin'];
  users: User[];
  signupForm: FormGroup;
  constructor(private userSvc: UserService, private auth:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.auth.redirect();
    this.signupForm=new FormGroup({
      'firstname' : new FormControl(null, Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'email':new FormControl(null, [Validators.required,Validators.email], isEmailTaken(this.userSvc)), // custom validator to check for unique email
      'password': new FormControl(null, Validators.required),
      'role': new FormControl('user', Validators.required)
    })
  }

  onSubmit(){
    if( this.signupForm.invalid){
     alert("Invalid inputs");
     return;
   }
   const formValues = this.signupForm.value;
   this.userSvc.addUser(new User(formValues)).subscribe(
     u=> {
       console.log(u);
       this.router.navigate(['/signin']);
     }
   )

  }
}
