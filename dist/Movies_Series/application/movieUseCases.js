"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieUseCase = void 0;
const movieValue_1 = require("../domain/movieValue");
class MovieUseCase {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
        this.getAllMovies = () => __awaiter(this, void 0, void 0, function* () {
            const movies = yield this.movieRepository.getAllMovie();
            return movies;
        });
        this.getMoviesById = (id) => __awaiter(this, void 0, void 0, function* () {
            const movie = yield this.movieRepository.getMovieById(id);
            return movie;
        });
        this.createMovie = ({ image, title, date, qualification }) => __awaiter(this, void 0, void 0, function* () {
            const newMovie = new movieValue_1.MovieValue({ image, title, date, qualification });
            const movie = yield this.movieRepository.createMovie(newMovie);
            return movie;
        });
        this.deleteMovie = (id) => __awaiter(this, void 0, void 0, function* () {
            const movie = yield this.movieRepository.deleteMovie(id);
            return movie;
        });
        this.updateMovie = ({ image, title, date, qualification }, id) => __awaiter(this, void 0, void 0, function* () {
            const updateMovie = new movieValue_1.MovieValue({ image, title, date, qualification });
            const movie = yield this.movieRepository.updateMovie(updateMovie, id);
            return movie;
        });
        this.getMovieByTitle = (title) => __awaiter(this, void 0, void 0, function* () {
            const movie = yield this.movieRepository.getMovieByTitle(title);
            return movie;
        });
    }
}
exports.MovieUseCase = MovieUseCase;
//# sourceMappingURL=movieUseCases.js.map