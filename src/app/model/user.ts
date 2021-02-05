export class User{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    dob:Date;
    role:string;
    gender:string;
    address:string;
    phone:string;

    public constructor(init? : Partial<User>) {
        Object.assign(this, init);       
    }
}