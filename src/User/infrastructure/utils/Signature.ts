import jwt from 'jsonwebtoken';
import {Request,Response,NextFunction} from 'express';

interface IPayload {
     id: string;
}


export const generateSignature = (payload:any) =>{
     return jwt.sign(payload,<string>process.env.TOKEN_SECRET);
}



export const checkOut = (req:Request,res:Response,next : NextFunction) => {
       let token;
       if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
          try {
               token = req.headers.authorization.split(' ') [1];
               const decoded = jwt.verify(token,<string>process.env.TOKEN_SECRET) as IPayload;
               req.user =  decoded.id;
               return next();
          }catch(error){
              return res.status(403).json({message : "Forbidden"})
          }
       }
       return res.status(401).json({message : "Token Invalid"})
}
