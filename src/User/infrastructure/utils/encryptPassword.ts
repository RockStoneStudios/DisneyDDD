import bcrypt from 'bcrypt';


export const encryptPassword = async (password: string) : Promise<string> =>{
     const salt = await bcrypt.genSalt(10); 
    return await bcrypt.hash(password,salt);
}

export const passwordCompare = async(password:string, savedPassword: string): Promise<Boolean> =>{
     return await bcrypt.compare(password,savedPassword);
}