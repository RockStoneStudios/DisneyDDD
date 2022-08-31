import {IMovie} from './movieEntity';


export interface IMovieRepository {
    createMovie(movie : IMovie):Promise<IMovie|null>;
    getAllMovie() : Promise<IMovie[]|null>;
    getMovieById(id:string):Promise<IMovie|null>;
    deleteMovie(id : string):Promise<IMovie|null>;
    updateMovie (movie :IMovie,id:string): Promise<IMovie|null>;
    getMovieByTitle(title :string): Promise<IMovie|null>;
}