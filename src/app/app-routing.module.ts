import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth-module/signin/signin.component';
import { SignupComponent } from './auth-module/signup/signup.component';

import { UserDetailsComponent } from './user-module/user-details/user-details.component';
import { UserguardService } from './auth-module/guards/userguard.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
   { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path:'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'profile', component:UserDetailsComponent, canActivate:[UserguardService]},
  {path:'users', loadChildren:()=> import('./admin-module/admin.module').then(m=> m.AdminModule)},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
