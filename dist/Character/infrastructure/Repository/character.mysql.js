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
exports.CharacterRepository = void 0;
const Character_1 = require("../Model/Character");
class CharacterRepository {
    getAllCharacters() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield Character_1.Character.findAll({ include: 'Movie' });
            return characters;
        });
    }
    getCharacterById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield Character_1.Character.findByPk(id);
            return character;
        });
    }
    createCharacter(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCharacter = yield Character_1.Character.create(character);
            return newCharacter;
        });
    }
    deleteCharacter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield Character_1.Character.destroy({ where: { id: id } });
            return character;
        });
    }
    updateCharacter(character, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatecharacter = yield Character_1.Character.update(character, { where: { id: id } });
            return updatecharacter;
        });
    }
    getCharacterByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield Character_1.Character.findOne({ where: { name: name } });
            return character;
        });
    }
}
exports.CharacterRepository = CharacterRepository;
//# sourceMappingURL=character.mysql.js.map