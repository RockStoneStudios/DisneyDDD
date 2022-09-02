import { IMovie } from '../../Movies_Series/domain/movieEntity';
import {IGenre} from './genreEntity';
import {v4} from 'uuid';

export class GenreValue implements IGenre {
     id:string;
     image : string;
     name : string;
     movies : IMovie[];


     constructor({image,name,movies}:{image : string,name:string,movies: IMovie[]}){
        this.id = v4();
        this.image = image;
        this.name = name;
        this.movies = movies;
     }


}