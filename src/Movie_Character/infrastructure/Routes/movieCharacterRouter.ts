import { Router } from 'express'; 
import {Movie_Character_Repository} from '../Repository/Movie_Character_Repository';
import {Movie_Character_Cases} from '../../application/MovieCharacter_UseCases';
import {MovieCharacterController} from '../Controller/movie_character_controller';

const router = Router();

const movie_character_repository = new Movie_Character_Repository();
const movie_character_use_cases = new Movie_Character_Cases(movie_character_repository);
const movieCharcaterController = new MovieCharacterController(movie_character_use_cases);


router.post('/asociate',movieCharcaterController.createMovieCharacter);
router.get('/movie-character',movieCharcaterController.getAllMovieCharacter);
router.get('/movie-character/:id',movieCharcaterController.getMovieCharacterById);



export default router;