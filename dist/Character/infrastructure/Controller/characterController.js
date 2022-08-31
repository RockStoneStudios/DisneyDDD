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
exports.CharacterController = void 0;
class CharacterController {
    constructor(characterCase) {
        this.characterCase = characterCase;
        this.getAllCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const characters = yield this.characterCase.getAllCharacter();
                return res.status(200).json(characters);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getCharacterById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const character = yield this.characterCase.getCharacterById(req.params.id);
                return res.status(200).json(character);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const character = yield this.characterCase.createCharacter(req.body);
                return res.status(201).json(character);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const character = yield this.characterCase.deleteCharacter(req.params.id);
                return res.status(200).json({ message: `The Character has been delete with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const character = yield this.characterCase.updateCharacter(req.body, req.params.id);
                console.log(character);
                return res.status(200).json({ message: `Character has been Updated with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getCharacterByName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.log("----------------" + req.query.name);
            try {
                const character = yield this.characterCase.getCharacterByName((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name);
                return res.status(200).json(character);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.CharacterController = CharacterController;
//# sourceMappingURL=characterController.js.map