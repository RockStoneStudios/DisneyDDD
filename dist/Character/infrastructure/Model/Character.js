"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../DB/connection"));
class Character extends sequelize_1.Model {
}
exports.Character = Character;
Character.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        primaryKey: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10
    },
    history: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    modelName: 'Character',
    timestamps: false
});
//# sourceMappingURL=Character.js.map