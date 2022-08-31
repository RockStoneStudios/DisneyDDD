"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../DB/../../../Character/infrastructure/DB/connection"));
class Movie extends sequelize_1.Model {
}
exports.Movie = Movie;
Movie.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://cdnb.20m.es/sites/165/2020/07/paramount-pictures.jpg"
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    qualification: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
            min: 1,
            max: 5
        }
    }
}, {
    sequelize: connection_1.default,
    modelName: 'Movie',
    timestamps: false
});
//# sourceMappingURL=Movie.js.map