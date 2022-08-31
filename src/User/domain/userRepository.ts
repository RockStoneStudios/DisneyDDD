import { IUser } from "./userEntity";
import {Response} from 'express'

export interface IUserRepository{
    registerUser(user:IUser) : Promise<IUser|null>;
    loginUser(email : string,password:string) : Promise<null>;
    getAllUser(): Promise<IUser[]|null>;
    getUserById(id:string):Promise<IUser|null>;
    updateUser(id : string, user:IUser) : Promise<IUser|null>;
    deleteUser(id: string):Promise<IUser|null>;
    getUserByEmail(email : string) :Promise<IUser>;
    
}