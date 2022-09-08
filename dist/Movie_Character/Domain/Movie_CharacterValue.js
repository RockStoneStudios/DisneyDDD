"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie_Character_Value = void 0;
const uuid_1 = require("uuid");
class Movie_Character_Value {
    constructor({ MovieId, CharacterId }) {
        this.id = (0, uuid_1.v4)();
        this.MovieId = MovieId;
        this.CharacterId = CharacterId;
    }
}
exports.Movie_Character_Value = Movie_Character_Value;
//# sourceMappingURL=Movie_CharacterValue.js.map