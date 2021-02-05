import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]=[]
  constructor(private userSvc:UserService, private route: ActivatedRoute) { 

    this.users = route.snapshot.data['userList'];
    this.users = this.users.filter(user=> user.role!='admin');
  }

  ngOnInit(): void {
  }

  deleteUser(user:User){
    this.userSvc.deleteUser(user).subscribe();
    this.users = this.users.filter((u=> u.id!=user.id));
  }

  details(user:User){
    
  }

}


