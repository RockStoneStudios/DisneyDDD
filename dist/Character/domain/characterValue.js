"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterValue = void 0;
const uuid_1 = require("uuid");
class CharacterValue {
    constructor({ image, name, age, weight, history }) {
        this.id = (0, uuid_1.v4)();
        this.image = image;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.history = history;
    }
}
exports.CharacterValue = CharacterValue;
//# sourceMappingURL=characterValue.js.map