import {Model,DataTypes} from 'sequelize';
import sequelize from '../../../Character/infrastructure/DB/connection';
import {IMovieCharacter} from '../../domain/movie_character_entity'


export class Movie_Character extends Model <IMovieCharacter> {
    declare id : string;
    declare MovieId : string;
    declare CharacterId : string;
    
}


Movie_Character.init({
    id : {
        type : DataTypes.STRING,
        unique : true,
        primaryKey : true
    },
    MovieId : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    CharacterId : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    sequelize,
    modelName : "Movie_Character"
})