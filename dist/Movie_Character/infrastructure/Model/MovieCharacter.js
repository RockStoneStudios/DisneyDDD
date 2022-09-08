"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie_Character = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../Character/infrastructure/DB/connection"));
class Movie_Character extends sequelize_1.Model {
}
exports.Movie_Character = Movie_Character;
Movie_Character.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        primaryKey: true
    },
    MovieId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    CharacterId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    modelName: "Movie_Character"
});
//# sourceMappingURL=MovieCharacter.js.map