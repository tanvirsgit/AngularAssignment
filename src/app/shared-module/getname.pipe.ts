import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../model/user";

@Pipe({
    name:'fullname'
})
export class GetFullname implements PipeTransform{
    transform(user:User){
        let fname = user.firstname.charAt(0).toUpperCase()+user.firstname.slice(1);
        let lname = user.lastname.charAt(0).toUpperCase()+user.lastname.slice(1);
        return fname+" "+lname;
    }
}