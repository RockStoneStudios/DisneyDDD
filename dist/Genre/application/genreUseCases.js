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
exports.GenreUseCase = void 0;
const genreValue_1 = require("../domain/genreValue");
class GenreUseCase {
    constructor(genreRepository) {
        this.genreRepository = genreRepository;
        this.getAllGenre = () => __awaiter(this, void 0, void 0, function* () {
            const genres = yield this.genreRepository.getAllGenre();
            return genres;
        });
        this.getGenreById = (id) => __awaiter(this, void 0, void 0, function* () {
            const genre = yield this.genreRepository.getGenreById(id);
            return genre;
        });
        this.createGenreById = ({ image, name, movies }) => __awaiter(this, void 0, void 0, function* () {
            const newGenre = new genreValue_1.GenreValue({ image, name, movies });
            const genre = this.genreRepository.createGenre(newGenre);
        });
    }
}
exports.GenreUseCase = GenreUseCase;
//# sourceMappingURL=genreUseCases.js.map