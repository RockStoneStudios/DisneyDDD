import {Model,DataTypes} from 'sequelize';
import sequelize from '../DB/connection';
import {ICharacter} from '../../domain/characterEntity';


export class Character extends Model <ICharacter>{
    declare id : string;
    declare image : string;
    declare name : string;
    declare age : number;
    declare weight : number;
    declare history : string;
    
}

Character.init({
    id : {
        type : DataTypes.STRING,
        allowNull : true,
        primaryKey : true
    },
     image :{
         type : DataTypes.STRING,
         allowNull : false
     },
     name : {
        type : DataTypes.STRING,
        allowNull : false
     },
     age : {
        type : DataTypes.INTEGER,
        allowNull : false
     },
     weight : {
        type : DataTypes.INTEGER,
        allowNull : true,
        defaultValue : 10
     },
      history : {
         type : DataTypes.STRING,
         allowNull : false
      }
     

},{
    sequelize,
    modelName : 'Character',
    timestamps : false
});
