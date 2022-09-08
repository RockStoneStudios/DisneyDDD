import { IMovieCharacter } from "./movie_character_entity";
import {v4} from 'uuid';


export class Movie_Character_Value implements IMovieCharacter {
    id : string;
    MovieId : string;
    CharacterId: string;

    constructor({MovieId,CharacterId}:{MovieId : string,CharacterId:string}){
        this.id = v4();
        this.MovieId = MovieId;
        this.CharacterId = CharacterId;
    }
}