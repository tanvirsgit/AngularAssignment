import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

export function isEmailTaken(userSvc: UserService): AsyncValidatorFn{
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable< ValidationErrors| null> =>{
    return userSvc.searchEmail(encodeURIComponent(c.value)).pipe(
        map(u=>{
          return u && u.length>0 ? {'Takenemail':true} : null;
        })
      );
  }
}

@Directive({
  selector: '[Takenemail]',
  providers:[{provide: NG_ASYNC_VALIDATORS, useExisting: TakenemailDirective,multi:true}]
})
export class TakenemailDirective implements AsyncValidator{

  constructor(private userSvc: UserService) { }

  validate(c: AbstractControl) : Promise<ValidationErrors| null> | Observable<ValidationErrors|null>{
      return this.userSvc.searchEmail(encodeURIComponent(c.value)).pipe(
        map(u=>{
          return u && u.length>0 ? {'Takenemail':true} : null;
        })
      );
  }
}
