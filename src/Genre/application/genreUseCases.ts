import {IGenreRepository} from '../domain/genreRepository';
import {IMovie} from '../../Movies_Series/domain/movieEntity';
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

    public createGenreById = async ({image,name,movies}:{image:string,name:string,movies:IMovie[]})=>{
            const newGenre = new GenreValue({image,name,movies});
            const genre = this.genreRepository.createGenre(newGenre);

    }
}


