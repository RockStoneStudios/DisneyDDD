import {Model,DataTypes} from 'sequelize';
import sequelize from '../../../Character/infrastructure/DB/connection';
import { IMovie } from '../../../Movies_Series/domain/movieEntity';
import { IGenre } from '../../domain/genreEntity';
import { Movie } from '../../../Movies_Series/infrastructure/Model/Movie';
export class Genre extends Model implements IGenre {
    declare id: string;
    declare image : string;
    declare name : string;
    declare movies :IMovie[];
    
}

    Genre.init({
         id : {
            type : DataTypes.STRING,
            primaryKey : true,
            unique : true
         },
         image : {
            type : DataTypes.STRING,
            allowNull : true,
            defaultValue : "https://es.yam-mag.com/wp-content/uploads/2017/03/banner-kong.jpg",
         },
         name : {
            type : DataTypes.STRING,
            allowNull : false,
         }
    },{
        sequelize,
        modelName : 'Genre',
        timestamps : false
    });


Movie.belongsTo(Genre);
Genre.hasMany(Movie);

