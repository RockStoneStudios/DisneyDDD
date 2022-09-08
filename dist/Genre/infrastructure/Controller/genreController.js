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
exports.GenreController = void 0;
class GenreController {
    constructor(genreUseCase) {
        this.genreUseCase = genreUseCase;
        this.getAllGenre = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const genres = yield this.genreUseCase.getAllGenre();
                return res.status(200).json(genres);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getGenreById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const genres = yield this.genreUseCase.getGenreById(req.params.id);
                return res.status(200).json(genres);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createGenre = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newGenre = yield this.genreUseCase.createGenre(req.body);
                return res.status(200).json({ message: `The genre ${newGenre === null || newGenre === void 0 ? void 0 : newGenre.name} has been Created with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.GenreController = GenreController;
//# sourceMappingURL=genreController.js.map