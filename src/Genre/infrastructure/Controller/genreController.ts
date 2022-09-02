import {Request,Response} from 'express';
import {GenreUseCase} from '../../application/genreUseCases';
import {IGenre} from '../../domain/genreEntity';

export class GenreController {
    constructor (private genreUseCase : GenreUseCase){}

    public getAllGenre = async(req:Request,res:Response) =>{
        try{
            const genres = await this.genreUseCase.getAllGenre();
            return res.status(200).json(genres);
        }catch(error){
            return res.status(500).json(error);
        }
    }

}