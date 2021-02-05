import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {

  user: User;
  date: Date;
  editForm: FormGroup;
  id: number;
  constructor(private router: Router, private route:ActivatedRoute,private userSvc: UserService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.editForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl(null),
      'phone': new FormControl(null,Validators.pattern('[- +()0-9]+')),
      'address': new FormControl(null),
      'dob': new FormControl(null)
    });

    this.date = new Date(1970,1,1);
    this.userSvc.getUser(this.id).subscribe(
      u=> {
        this.user = u;
        if(!this.user.dob)
          this.user.dob=new Date(1970,1,1);
        this.editForm.patchValue({
        'firstname': this.user.firstname,
        'lastname':this.user.lastname,
        'email': this.user.email,
        'gender':this.user.gender,
        'phone':this.user.phone,
        'address': this.user.address,
        'dob': new Date(this.user.dob)
    });
      }
      
    );
  }

  onSubmit(){
    if(this.editForm.invalid){
      alert("Invalid inputs");
      return;
    }
    let user = new User(this.editForm.value);
    user.id = this.id;
    user.password = this.user.password;
    user.role = this.user.role;
    console.log(user);

    this.userSvc.updateUser(user).subscribe(
      u=> {
        console.log("User info updated");
        this.router.navigate(['/users']);
    }
      
    )
  }

}
