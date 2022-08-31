import { IUser } from "./userEntity";
import {v4} from 'uuid'
export class UserValue implements  IUser {
     id : string;
     firstname : string;
     lastname : string;
     age : number;
     email : string;
     password: string;
     isAdmin : boolean;

     constructor({firstname,lastname,age,email,password,isAdmin}:{firstname :string,lastname:string,age :number,email:string,password: string,isAdmin : boolean}){
         this.id = v4();
         this.firstname = firstname;
         this.lastname = lastname;
         this.age = age;
         this.email = email;
         this.password = password;
         this.isAdmin = isAdmin;
     }
    
}