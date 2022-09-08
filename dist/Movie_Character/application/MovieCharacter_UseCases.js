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
exports.Movie_Character_Cases = void 0;
const Movie_CharacterValue_1 = require("../domain/Movie_CharacterValue");
class Movie_Character_Cases {
    constructor(movie_character_repository) {
        this.movie_character_repository = movie_character_repository;
        this.getAllMovieCharacter = () => __awaiter(this, void 0, void 0, function* () {
            const movieCharacters = yield this.movie_character_repository.getAllRelationMovieCharacter();
            return movieCharacters;
        });
        this.getMovieCharacterById = (id) => __awaiter(this, void 0, void 0, function* () {
            const movieCharacter = yield this.movie_character_repository.getMovieCharacterById(id);
            return movieCharacter;
        });
        this.createRelationMovieCharacater = ({ MovieId, CharacterId }) => __awaiter(this, void 0, void 0, function* () {
            const newMovieCharacter = new Movie_CharacterValue_1.Movie_Character_Value({ MovieId, CharacterId });
            const movieCharacter = yield this.movie_character_repository.createRelationShip(newMovieCharacter);
            return movieCharacter;
        });
    }
}
exports.Movie_Character_Cases = Movie_Character_Cases;
//# sourceMappingURL=MovieCharacter_UseCases.js.map