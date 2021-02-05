import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared-module/shared.module";
import { UserDetailsComponent } from "./user-details/user-details.component";

@NgModule({
    imports:[
        CommonModule,
        SharedModule
    ],
    declarations:[
       UserDetailsComponent 
    ]
})
export class UserModule{

}