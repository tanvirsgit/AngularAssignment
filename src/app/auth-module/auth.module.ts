import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule
    ],
    declarations:[
        SignupComponent,
        SigninComponent
    ]
})

export class AuthModule{

}