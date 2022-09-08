
import {IMovie_Character_Repository} from '../domain/IMovie_CharacterRepository'
import {Movie_Character_Value} from '../domain/Movie_CharacterValue';


export class Movie_Character_Cases {
    constructor (private readonly movie_character_repository:IMovie_Character_Repository){}

    public getAllMovieCharacter = async() => {
        const movieCharacters = await this.movie_character_repository.getAllRelationMovieCharacter();
        return movieCharacters;
    }

    public getMovieCharacterById = async (id:string)=> {
        const movieCharacter = await this.movie_character_repository.getMovieCharacterById(id);
        return movieCharacter;
    }
    public createRelationMovieCharacater = async({MovieId,CharacterId}:{MovieId:string,CharacterId:string})=>{
          const newMovieCharacter = new Movie_Character_Value({MovieId,CharacterId});
          const movieCharacter = await this.movie_character_repository.createRelationShip(newMovieCharacter);
          return movieCharacter;
    }
}