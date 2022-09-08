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
exports.MovieCharacterController = void 0;
class MovieCharacterController {
    constructor(movie_character_useCases) {
        this.movie_character_useCases = movie_character_useCases;
        this.getAllMovieCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("entre");
                const movieCharacters = yield this.movie_character_useCases.getAllMovieCharacter();
                console.log(movieCharacters);
                return res.status(200).json(movieCharacters);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getMovieCharacterById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const movieCharacter = yield this.movie_character_useCases.getMovieCharacterById(req.params.id);
                return res.status(200).json(movieCharacter);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createMovieCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovieCharacter = yield this.movie_character_useCases.createRelationMovieCharacater(req.body);
                return res.status(200).json({ message: `The Asociation has been created Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.MovieCharacterController = MovieCharacterController;
//# sourceMappingURL=movie_character_controller.js.map