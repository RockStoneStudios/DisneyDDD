import { Router } from 'express';
import {GenreUseCase} from '../../application/genreUseCases';
import {GenreController} from '../Controller/genreController';
import {GenreRepository} from '../Repository/genreRepository';

const router = Router();

const genreRepository = new GenreRepository();
const genreUseCase = new GenreUseCase(genreRepository);
const genreController = new GenreController(genreUseCase);


router.get('/',genreController.getAllGenre);
router.post('/create',genreController.createGenre);
router.get('/:id',genreController.getGenreById);



export default router;

