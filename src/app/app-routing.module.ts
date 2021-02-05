import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth-module/signin/signin.component';
import { SignupComponent } from './auth-module/signup/signup.component';

import { UserDetailsComponent } from './user-module/user-details/user-details.component';
import { UserguardService } from './auth-module/guards/userguard.service';

const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path:'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'profile', component:UserDetailsComponent, canActivate:[UserguardService]},
  {path:'users', loadChildren:()=> import('./admin-module/user-routing.module').then(m=> m.UserRoutingModule)},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
