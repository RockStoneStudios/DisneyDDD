import {IGenreRepository} from '../domain/genreRepository';
import {GenreValue} from '../domain/genreValue';


export class GenreUseCase {
    constructor (private readonly genreRepository : IGenreRepository){}

    public getAllGenre = async () => {
        const genres = await this.genreRepository.getAllGenre();
        return genres;
    }

    public getGenreById = async (id:string) =>{
         const genre = await this.genreRepository.getGenreById(id);
         return genre;
    }

    public createGenre = async ({image,name}:{image:string,name:string})=>{
            const newGenre = new GenreValue({image,name});
            const genre = await this.genreRepository.createGenre(newGenre);
            return genre;

    }
}


