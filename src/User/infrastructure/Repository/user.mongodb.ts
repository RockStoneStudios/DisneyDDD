import { IUser } from "../../domain/userEntity";
import { IUserRepository } from "../../domain/userRepository"; 
import { UserValue } from "../../domain/userValue";
import User from '../Model/UserSchema'

export class MongoRepository  implements IUserRepository{

    async getAllUser(): Promise<any> {
        const users = await User.find();
        return users;
    }

    async getUserById(id: string): Promise<any> {
         const user = await User.findOne({id}).select('-_id -id -password');
         return user;
    }

    async registerUser(user: IUser): Promise<any> {
        const newUser = await User.create(user);
        return newUser;
    }
    async loginUser(email: string, password: string): Promise<any> {
         const user = await User.findOne({email : email});
         return user;
    }

    async deleteUser(id: string): Promise<any> {
        const user =  await User.findOneAndDelete({id: id});
        return user;
    }
    async updateUser(id: string, user: IUser): Promise<any> {
        const updateUser = await User.findOneAndUpdate({id : id},user,{new : true});
        return updateUser;
    }
    async getUserByEmail(email: string): Promise<any> {
        const user = await User.findOne({email});
        return user;
    }
}