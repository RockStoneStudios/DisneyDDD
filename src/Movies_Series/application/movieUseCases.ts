import {IMovieRepository} from '../domain/movieRepository';
import {MovieValue} from '../domain/movieValue';


export class MovieUseCase {
    constructor(private readonly movieRepository:IMovieRepository){}

    public getAllMovies = async() => {
        const movies = await this.movieRepository.getAllMovie();
        return movies;
    }

    public getMoviesById = async(id : string) => {
        const movie = await this.movieRepository.getMovieById(id);
        return movie;
    }

    public createMovie = async ({image,title,date,qualification}:
                         {image : string,title:string,date:string,qualification :number})=>{
          const newMovie = new MovieValue({image,title,date,qualification});
          const movie = await this.movieRepository.createMovie(newMovie);
          return movie;
    }
    public deleteMovie = async (id : string) => {
        const movie = await this.movieRepository.deleteMovie(id);
        return movie;
    }

    public updateMovie = async ({image,title,date,qualification}:
                        {image:string,title:string,date:string,qualification:number},id:string)=>{
                         const updateMovie = new MovieValue({image,title,date,qualification});
                         const movie = await this.movieRepository.updateMovie(updateMovie,id);
                         return movie;

    }
    public getMovieByTitle = async(title : string)=> {
          const movie = await this.movieRepository.getMovieByTitle(title);
          return movie;
    }
}