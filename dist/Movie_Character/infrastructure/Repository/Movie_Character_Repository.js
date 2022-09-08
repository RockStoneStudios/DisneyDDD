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
exports.Movie_Character_Repository = void 0;
const MovieCharacter_1 = require("../Model/MovieCharacter");
const Movie_1 = require("../../../Movies_Series/infrastructure/Model/Movie");
const Character_1 = require("../../../Character/infrastructure/Model/Character");
class Movie_Character_Repository {
    getAllRelationMovieCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            const movieCharacters = yield MovieCharacter_1.Movie_Character.findAll({ include: [{ model: Movie_1.Movie }, { model: Character_1.Character, required: false }] });
            return movieCharacters;
        });
    }
    getMovieCharacterById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movieCharacter = yield MovieCharacter_1.Movie_Character.findOne({ where: { id: id } });
            return movieCharacter;
        });
    }
    createRelationShip(movieCharacter) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMovieCharacter = yield MovieCharacter_1.Movie_Character.create(movieCharacter);
            return newMovieCharacter;
        });
    }
}
exports.Movie_Character_Repository = Movie_Character_Repository;
//# sourceMappingURL=Movie_Character_Repository.js.map