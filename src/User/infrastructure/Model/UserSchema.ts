import { NextFunction } from 'express';
import {model,Schema} from 'mongoose';


const userSchema = new Schema({
    id : {
        type : String,
        unique : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        Option :{
            min : 1,
            max : 120
        }
    },
    email : {
        type :String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        Option : {
             minlength : 6
        }
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
},{
     versionKey : false,
     timestamps : false
});


export default model('User',userSchema);