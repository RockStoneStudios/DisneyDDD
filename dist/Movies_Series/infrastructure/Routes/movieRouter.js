"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_sql_1 = require("../Repository/movie.sql");
const movieUseCases_1 = require("../../application/movieUseCases");
const movieController_1 = require("../Controller/movieController");
const express_1 = require("express");
const router = (0, express_1.Router)();
const movieRepository = new movie_sql_1.MovieRepository();
const movieUseCase = new movieUseCases_1.MovieUseCase(movieRepository);
const movieController = new movieController_1.MovieController(movieUseCase);
router.get('/', movieController.getMovieAll);
router.post('/create', movieController.createMovie);
router.delete('/delete/:id', movieController.deleteMovie);
router.put('/update/:id', movieController.updateMovie);
router.get('/query', movieController.getMovieByTitle);
router.get('/:id', movieController.getMovieById);
exports.default = router;
//# sourceMappingURL=movieRouter.js.map