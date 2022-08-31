"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characterUseCases_1 = require("../../application/characterUseCases");
const character_mysql_1 = require("../Repository/character.mysql");
const characterController_1 = require("../Controller/characterController");
const router = (0, express_1.Router)();
const characterRepository = new character_mysql_1.CharacterRepository();
const characterUseCase = new characterUseCases_1.CharacterUseCase(characterRepository);
const characterController = new characterController_1.CharacterController(characterUseCase);
router.get('/', characterController.getAllCharacter);
router.post('/create', characterController.createCharacter);
router.delete('/delete/:id', characterController.deleteCharacter);
router.put('/update/:id', characterController.updateCharacter);
router.get('/query', characterController.getCharacterByName);
router.get('/:id', characterController.getCharacterById);
exports.default = router;
//# sourceMappingURL=characterRouter.js.map