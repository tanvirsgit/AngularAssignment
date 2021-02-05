import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    

    const users:User[] =[
      {
        id:1,
        firstname:'tanvir',
        lastname:'dipro',
        email:'a@a.com',
        password:'123',
        role:'admin',
        dob:new Date(2000,2,2),
        address:'Dhaka',
        phone:'123',
        gender:'male',
      },
      {
        id:2,
        firstname:'alex',
        lastname:'pohb',
        email:'b@b.com',
        password:'123',
        role:'user',
        dob:new Date(2000,2,2),
        address:'Dhaka',
        phone:'123',
        gender:'male',
      },
      {
        id:3,
        firstname:'Daniel',
        lastname:'Chow',
        email:'c@gmail.com',
        password:'123',
        role:'user',
        dob:new Date(2000,2,2),
        address:'Dhaka',
        phone:'123',
        gender:'male',
      },
      {
        id:4,
        firstname:'bob',
        lastname:'pahe',
        email:'abc@gmail.com',
        password:'123',
        role:'user',
        dob:new Date(2000,2,2),
        address:'Dhaka',
        phone:'123',
        gender:'male',
      }
    ];

    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
     genId(users: User[]): number {
       return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
     }

}
