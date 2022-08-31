import {MovieRepository} from '../Repository/movie.sql';
import {MovieUseCase} from '../../application/movieUseCases';
import {MovieController} from '../Controller/movieController';
import {Router} from 'express';
import router from '../../../User/infrastructure/Routes/userRouter';

const movieRepository = new MovieRepository();

const movieUseCase = new MovieUseCase(movieRepository);

const movieController = new MovieController(movieUseCase);

router.get('/',movieController.getMovieAll);
router.post('/create',movieController.createMovie);
router.delete('/delete/:id',movieController.deleteMovie);
router.put('/update/:id',movieController.updateMovie);
router.get('/query',movieController.getMovieByTitle);
router.get('/:id',movieController.getMovieById);



export default router;
