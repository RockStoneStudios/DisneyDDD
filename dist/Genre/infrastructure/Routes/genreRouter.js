"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genreUseCases_1 = require("../../application/genreUseCases");
const genreController_1 = require("../Controller/genreController");
const genreRepository_1 = require("../Repository/genreRepository");
const router = (0, express_1.Router)();
const genreRepository = new genreRepository_1.GenreRepository();
const genreUseCase = new genreUseCases_1.GenreUseCase(genreRepository);
const genreController = new genreController_1.GenreController(genreUseCase);
router.get('/', genreController.getAllGenre);
router.post('/create', genreController.createGenre);
router.get('/:id', genreController.getGenreById);
exports.default = router;
//# sourceMappingURL=genreRouter.js.map