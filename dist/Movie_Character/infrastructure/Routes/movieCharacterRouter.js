"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Movie_Character_Repository_1 = require("../Repository/Movie_Character_Repository");
const MovieCharacter_UseCases_1 = require("../../application/MovieCharacter_UseCases");
const movie_character_controller_1 = require("../Controller/movie_character_controller");
const router = (0, express_1.Router)();
const movie_character_repository = new Movie_Character_Repository_1.Movie_Character_Repository();
const movie_character_use_cases = new MovieCharacter_UseCases_1.Movie_Character_Cases(movie_character_repository);
const movieCharcaterController = new movie_character_controller_1.MovieCharacterController(movie_character_use_cases);
router.post('/asociate', movieCharcaterController.createMovieCharacter);
router.get('/movie-character', movieCharcaterController.getAllMovieCharacter);
router.get('/movie-character/:id', movieCharcaterController.getMovieCharacterById);
exports.default = router;
//# sourceMappingURL=movieCharacterRouter.js.map