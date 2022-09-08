import {IMovieCharacter} from './movie_character_entity';

export interface IMovie_Character_Repository {
    createRelationShip (movieCharacter : IMovieCharacter) :Promise<IMovieCharacter|null>;
    getAllRelationMovieCharacter() : Promise<IMovieCharacter[]|null>;
    getMovieCharacterById(id :string):Promise<IMovieCharacter|null>;
}