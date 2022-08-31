import { IUserRepository } from "../domain/userRepository";
import { UserValue } from "../domain/userValue";

export class UserUseCase {
    constructor(private readonly userRepository : IUserRepository){}
    
     /**
      * getAllUserCase
      */
     public getAllUser = async() => {
         const users = await this.userRepository.getAllUser();
         return users;
     }

      /**
       * get User By Id
       * @param id 
       * @returns 
       */

     public getUserById = async(id : string)=> {
        const user = await this.userRepository.getUserById(id);
        return user;
     }

     public createUser = async({firstname,lastname,age,email,password,isAdmin}:
        {firstname : string,lastname:string,age :number,email:string,password:string,isAdmin : boolean}) =>
        {
         const newUserValue = new UserValue({firstname,lastname,age,email,password,isAdmin});
         const user = this.userRepository.registerUser(newUserValue);
         return user;
        }
    
     public updateUser = async(id:string,{firstname,lastname,age,email,password,isAdmin}:{firstname :string,lastname:string,age:number,email:string,password: string,isAdmin:boolean}) =>{
         const userValue = new UserValue({firstname,lastname,age,email,password,isAdmin});
         const user = this.userRepository.updateUser(id,userValue);
         return user;
     }   
      
      public loginUser = async(email : string,password : string) =>{
          const userLogin = this.userRepository.loginUser(email,password);
          return userLogin;
      }

     public deleteUser = async(id : string) => {
        const user = await this.userRepository.deleteUser(id);
        return user;
     }

     public getUserByEmail = async(email:string)=>{
        const user = await this.userRepository.getUserByEmail(email);
        return user;
     }

     
}
