import {IMovie} from '../../domain/movieEntity';
import { IMovieRepository } from '../../domain/movieRepository';
import { Movie } from '../Model/Movie';


export class MovieRepository implements IMovieRepository {
    async getAllMovie(): Promise<IMovie[] | null> {
        const movies = await Movie.findAll();
        return movies;
    }

    async getMovieById(id: string): Promise<IMovie | null> {
        const movie = await Movie.findOne({where : {id : id}});
        return movie;
    }

    async createMovie(movie: IMovie): Promise<IMovie | null> {
        const newMovie = await Movie.create(movie);
        return movie;
    }
    async deleteMovie(id: string): Promise<IMovie | any> {
        const deleteMovie = await Movie.destroy({where : {id : id}});
        return deleteMovie; 
    }

    async updateMovie(movie: IMovie, id: string): Promise<IMovie | any> {
        const updaMovie = await Movie.update(movie,{where:{id: id}});
        return updaMovie;
    }

    async getMovieByTitle(title: string): Promise<IMovie | null> {
        const movie = await Movie.findOne({where : {title: title}});
        return movie;
    }
}