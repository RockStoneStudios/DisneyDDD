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
exports.CharacterUseCase = void 0;
const characterValue_1 = require("../domain/characterValue");
class CharacterUseCase {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
        this.getAllCharacter = () => __awaiter(this, void 0, void 0, function* () {
            const characters = yield this.characterRepository.getAllCharacters();
            return characters;
        });
        this.getCharacterById = (id) => __awaiter(this, void 0, void 0, function* () {
            const character = yield this.characterRepository.getCharacterById(id);
            return character;
        });
        this.createCharacter = ({ image, name, age, weight, history }) => __awaiter(this, void 0, void 0, function* () {
            const newCharacter = new characterValue_1.CharacterValue({ image, name, age, weight, history });
            const character = yield this.characterRepository.createCharacter(newCharacter);
            return character;
        });
        this.deleteCharacter = (id) => __awaiter(this, void 0, void 0, function* () {
            const character = yield this.characterRepository.deleteCharacter(id);
            return character;
        });
        this.updateCharacter = ({ image, name, age, weight, history }, id) => __awaiter(this, void 0, void 0, function* () {
            const updateCharacter = new characterValue_1.CharacterValue({ image, name, age, weight, history });
            const character = yield this.characterRepository.updateCharacter(updateCharacter, id);
            return character;
        });
        this.getCharacterByName = (name) => __awaiter(this, void 0, void 0, function* () {
            const character = yield this.characterRepository.getCharacterByName(name);
            return character;
        });
    }
}
exports.CharacterUseCase = CharacterUseCase;
//# sourceMappingURL=characterUseCases.js.map