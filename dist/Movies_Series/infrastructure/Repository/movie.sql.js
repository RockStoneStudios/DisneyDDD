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
exports.MovieRepository = void 0;
const Genre_1 = require("../../../Genre/infrastructure/Model/Genre");
const Movie_1 = require("../Model/Movie");
class MovieRepository {
    getAllMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield Movie_1.Movie.findAll({ include: { model: Genre_1.Genre, attributes: ['name'] }, attributes: { exclude: ["GenreId"] } });
            return movies;
        });
    }
    getMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield Movie_1.Movie.findOne({ where: { id: id } });
            return movie;
        });
    }
    createMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMovie = yield Movie_1.Movie.create(movie);
            return movie;
        });
    }
    deleteMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteMovie = yield Movie_1.Movie.destroy({ where: { id: id } });
            return deleteMovie;
        });
    }
    updateMovie(movie, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const updaMovie = yield Movie_1.Movie.update(movie, { where: { id: id } });
            return updaMovie;
        });
    }
    getMovieByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield Movie_1.Movie.findOne({ where: { title: title } });
            return movie;
        });
    }
    asociateMovie_Charcater(id) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=movie.sql.js.map