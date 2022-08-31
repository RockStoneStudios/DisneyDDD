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
exports.MovieController = void 0;
class MovieController {
    constructor(movieCase) {
        this.movieCase = movieCase;
        this.getMovieAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield this.movieCase.getAllMovies();
                return res.status(200).json(movies);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getMovieById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield this.movieCase.getMoviesById(req.params.id);
                return res.status(200).json(movie);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createMovie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = yield this.movieCase.createMovie(req.body);
                return res.status(201).json({ message: `The Movie ${req.body.title} has been Add with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteMovie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteMovie = yield this.movieCase.deleteMovie(req.params.id);
                return res.status(201).json({ message: `The Movie ${deleteMovie === null || deleteMovie === void 0 ? void 0 : deleteMovie.title} has been Delete with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateMovie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const updateMovie = yield this.movieCase.updateMovie(req.body, req.params.id);
                return res.status(201).json({ message: `The Movie ${updateMovie === null || updateMovie === void 0 ? void 0 : updateMovie.title} has been Update with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getMovieByTitle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield this.movieCase.getMovieByTitle(req.query.title);
                return res.status(200).json(movie);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movieController.js.map