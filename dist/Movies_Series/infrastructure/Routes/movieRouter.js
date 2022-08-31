"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_sql_1 = require("../Repository/movie.sql");
const movieUseCases_1 = require("../../application/movieUseCases");
const movieController_1 = require("../Controller/movieController");
const userRouter_1 = __importDefault(require("../../../User/infrastructure/Routes/userRouter"));
const movieRepository = new movie_sql_1.MovieRepository();
const movieUseCase = new movieUseCases_1.MovieUseCase(movieRepository);
const movieController = new movieController_1.MovieController(movieUseCase);
userRouter_1.default.get('/', movieController.getMovieAll);
userRouter_1.default.post('/create', movieController.createMovie);
userRouter_1.default.delete('/delete/:id', movieController.deleteMovie);
userRouter_1.default.put('/update/:id', movieController.updateMovie);
userRouter_1.default.get('/query', movieController.getMovieByTitle);
userRouter_1.default.get('/:id', movieController.getMovieById);
exports.default = userRouter_1.default;
//# sourceMappingURL=movieRouter.js.map