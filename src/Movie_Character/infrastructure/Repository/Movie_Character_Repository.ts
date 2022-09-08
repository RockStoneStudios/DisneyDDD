
import { IMovieRepository } from '../../../Movies_Series/domain/movieRepository';
import { IMovie_Character_Repository } from '../../domain/IMovie_CharacterRepository';
import { IMovieCharacter } from '../../domain/movie_character_entity';
import {Movie_Character} from '../Model/MovieCharacter';
import { Movie } from '../../../Movies_Series/infrastructure/Model/Movie';
import { Character } from '../../../Character/infrastructure/Model/Character';


export class Movie_Character_Repository implements IMovie_Character_Repository {
        async getAllRelationMovieCharacter(): Promise<IMovieCharacter[] | null> {
            
            const movieCharacters = await Movie_Character.findAll({include : [{model : Movie}, {model : Character,required : false}]});
             return movieCharacters;
        }

        async getMovieCharacterById(id: string): Promise<IMovieCharacter | null> {
            const movieCharacter = await Movie_Character.findOne({where : {id:id}});
            return movieCharacter;
        }

        async createRelationShip(movieCharacter: IMovieCharacter): Promise<IMovieCharacter | null> {
             const newMovieCharacter = await Movie_Character.create(movieCharacter);
             return newMovieCharacter;
        }
}