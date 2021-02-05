import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GetFullname } from "./getname.pipe";
import { TakenemailDirective } from "./takenemail.directive";
import { TransformDirective } from "./transform.directive";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        TakenemailDirective,
        TransformDirective,
        GetFullname
    ],
    exports:[
        TakenemailDirective,
        TransformDirective,
        GetFullname
    ]
})
export class SharedModule{

}