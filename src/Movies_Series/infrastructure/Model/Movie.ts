import {Model,DataTypes} from 'sequelize';
import { IMovie } from '../../domain/movieEntity';
import sequelize from '../DB/../../../Character/infrastructure/DB/connection';

export class Movie extends Model <IMovie>{
    declare id: string;
    declare image : string;
    declare title : string;
    declare date : string;
    declare qualification : number;
    
}

Movie.init({
    id :{
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
        primaryKey : true
    },
    image: {
        type : DataTypes.STRING,
        allowNull : true,
        defaultValue : "https://cdnb.20m.es/sites/165/2020/07/paramount-pictures.jpg"
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    date : {
        type : DataTypes.STRING,
        allowNull : true,
        
    },
    qualification : {
        type : DataTypes.INTEGER,
        defaultValue : 1,
        validate : {
            min : 1,
            max : 5
        }
        
    }
}, {
     sequelize,
     modelName : 'Movie',
     timestamps : false
});