import {Request,Response} from 'express';
import {UserUseCase} from '../../application/userUseCase';
import { IUser } from '../../domain/userEntity';
import {encryptPassword,passwordCompare} from '../utils/encryptPassword';
import {generateSignature} from '../utils/Signature'

export class UserController {
    constructor(private userCase:UserUseCase){}

    public getAllUser = async(req:Request,res:Response):Promise<IUser[]|Response> =>{
         const userLogin = await this.userCase.getUserById(req.user);
         console.log(userLogin);
         if(userLogin?.isAdmin){             
            try{
                const users = await this.userCase.getAllUser();
                return res.status(200).json(users);
                }catch(error){
                    return res.status(500).json(error);
            }
         
          }
          return res.status(403).json({message : "Access Denied!!"})
    }

    public getUserById = async(req:Request,res:Response):Promise<IUser|Response>=>{
        const id = req.params.id
        console.log(id+' -- '+req.user)
        if(id === req.user) {

            try{
               const user = await this.userCase.getUserById(id);
               return res.status(200).json(user);
            }catch(error){
               return res.status(500).json(error);
            }
        }else {
            return res.status(403).json({message : "Access Denied!!"})
        }
    }

    public registerUser = async(req:Request,res:Response):Promise<IUser|Response>=>{
        const newUser = req.body;
        const userExist = await this.userCase.getUserByEmail(req.body.email);
         if(userExist) return res.status(401).json({message : "This User has been already Exist with this Email!!"});
        newUser.password = await encryptPassword(newUser.password);
        try{
            const user = await this.userCase.createUser(newUser);
            return res.status(200).json({message : `the User ${newUser.firstname} has been created with Successfull`});
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public deleteUser = async(req:Request,res:Response):Promise<Response> =>{
         if(req.user === req.params.id) {
             try {
                  const user = await this.userCase.deleteUser(req.params.id);
                  return res.status(201).json({message : `the User has been Delete with Successfull`});
             }catch(error){
                return res.status(500).json(error);
             }
         }
         return res.status(403).json({message : "Access Denied !!"});
    }

    public updateUser = async(req:Request,res:Response):Promise<IUser|Response>=>{
         if(req.user === req.params.id){
            try{
                const user = await this.userCase.updateUser(req.params.id,req.body);
                return res.status(200).json(user);
            }catch(error){
                return res.status(500).json(error);
                
            }
         }
         return res.status(403).json({message : "Access Denied !!"})
    }

    public loginUser = async(req:Request,res:Response):Promise<Response> =>{
        try{
           const userExist = await this.userCase.getUserByEmail(req.body.email);
           if(!userExist) return res.status(404).json({message : "User Not Found"});
           const comparePassword = await passwordCompare(req.body.password,userExist.password);
           if(!comparePassword) return res.status(403).json({message : "The password do not match"});
           const payload = {
            id : userExist.id,
            email : userExist.email,
            isAdmin : userExist.isAdmin
            };
            const token = generateSignature(payload);
            return res.status(200).json({message : "Loggin Successful",token});

        }catch(error){
            return res.status(500).json(error);
        }
    }
}