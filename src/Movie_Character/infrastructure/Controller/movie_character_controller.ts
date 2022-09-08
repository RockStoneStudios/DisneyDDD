import {Request,Response} from 'express';
import {IMovieCharacter} from '../../domain/movie_character_entity';
import {Movie_Character_Repository} from '../Repository/Movie_Character_Repository';
import {Movie_Character_Cases} from '../../application/MovieCharacter_UseCases'

export class MovieCharacterController {
    constructor (private movie_character_useCases : Movie_Character_Cases ) {}

    public getAllMovieCharacter = async(req:Request,res:Response) : Promise<IMovieCharacter[]|Response> =>{
        try{
              console.log("entre");
              
              const movieCharacters = await this.movie_character_useCases.getAllMovieCharacter();
              console.log(movieCharacters);
              return res.status(200).json(movieCharacters);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public getMovieCharacterById = async(req:Request,res:Response): Promise<IMovieCharacter|Response>=>{
        try{
             const movieCharacter = await this.movie_character_useCases.getMovieCharacterById(req.params.id);
             return res.status(200).json(movieCharacter);
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public createMovieCharacter = async(req:Request,res:Response) : Promise<IMovieCharacter|Response> =>{
         try{
             
            const newMovieCharacter = await this.movie_character_useCases.createRelationMovieCharacater(req.body);
            return res.status(200).json({message : `The Asociation has been created Successful`});
         }catch(error){
            return res.status(500).json(error);
         }
    }
}