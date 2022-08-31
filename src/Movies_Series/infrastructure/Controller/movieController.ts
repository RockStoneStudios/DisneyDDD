import {Request,response,Response} from 'express';
import {MovieUseCase} from '../../application/movieUseCases';
import {IMovie} from '../../domain/movieEntity';



export class MovieController {
     constructor (private movieCase : MovieUseCase){}

     public getMovieAll = async (req:Request,res: Response):Promise<IMovie|Response> => {
        try {
             const movies = await this.movieCase.getAllMovies();
             return res.status(200).json(movies);
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public getMovieById = async(req:Request,res:Response):Promise<IMovie|Response> =>{
         try{
              const movie = await this.movieCase.getMoviesById(req.params.id);
              return res.status(200).json(movie);
         }catch(error){
            return res.status(500).json(error);
         }
     }

     public createMovie = async(req:Request,res:Response) : Promise<IMovie|Response> =>{
        try{
              const newMovie = await this.movieCase.createMovie(req.body);
              return res.status(201).json({message : `The Movie ${req.body.title} has been Add with Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public deleteMovie = async (req:Request,res:Response) : Promise<IMovie|Response>=>{
        try{
             const deleteMovie = await this.movieCase.deleteMovie(req.params.id);
             return res.status(201).json({message : `The Movie ${deleteMovie?.title} has been Delete with Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public updateMovie = async (req:Request,res:Response) :Promise<IMovie|Response>=>{
        try{
          const updateMovie = await this.movieCase.updateMovie(req.body,req.params.id);
          return res.status(201).json({message : `The Movie ${updateMovie?.title} has been Update with Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public getMovieByTitle = async (req:Request,res:Response):Promise<IMovie|Response>=>{
        
         try{
            const movie = await this.movieCase.getMovieByTitle(<string>req.query.title);
            return res.status(200).json(movie);
         }catch(error){
            return res.status(500).json(error);
         }
     }
}

