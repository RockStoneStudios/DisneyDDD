import {IMovie} from '../../Movies_Series/domain/movieEntity'

export interface IGenre {
    id : string,
    name: string,
    image : string;
    movies : IMovie[]

}