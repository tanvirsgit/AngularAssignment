import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { EditinfoComponent } from "./editinfo/editinfo.component";
import { UserresolverService } from "./resolver/userresolver.service";
import { UsersComponent } from "./users/users.component";
import { AdminguardService } from "../auth-module/guards/adminguard.service";

const userRoutes: Routes=[
    {path:'', component: UsersComponent, resolve:{userList: UserresolverService}, canActivate:[AdminguardService]},
    {path:'edit/:id', component:EditinfoComponent, canActivate:[AdminguardService]}
]
@NgModule({
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})
export class UserRoutingModule{

}