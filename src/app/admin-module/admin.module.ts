import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { SharedModule } from "../shared-module/shared.module";
import { EditinfoComponent } from "./editinfo/editinfo.component";
import { UserRoutingModule } from "./user-routing.module";
import { UsersComponent } from "./users/users.component";

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        BsDatepickerModule.forRoot(),
        SharedModule,
        UserRoutingModule
    ],

    declarations:[
        UsersComponent,
        EditinfoComponent
    ],
})
export class AdminModule{

}