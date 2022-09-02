import {IGenre} from './genreEntity';


export interface IGenreRepository {
    createGenre(genre:IGenre):Promise<IGenre|null>;
    getAllGenre():Promise<IGenre[]|null>;
    getGenreById(id:string): Promise<IGenre|null>;
}