import { Genre } from "../Model/Genre";
import {IGenre} from '../../domain/genreEntity';
import {IGenreRepository} from '../../domain/genreRepository'
import {GenreValue} from '../../domain/genreValue'

export class GenreRepository implements IGenreRepository{

    async getAllGenre(): Promise<IGenre[] | null> {
        const genres = await Genre.findAll();
        return genres;
    }

    async getGenreById(id: string): Promise<IGenre | null> {
         const genre = await Genre.findByPk(id);
         return genre;
    }

    async createGenre(genre: IGenre): Promise<IGenre|any> {
        const newGenre = await Genre.create(genre);
        return newGenre;
    }

    

    
}