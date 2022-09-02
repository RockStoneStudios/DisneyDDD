"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../Character/infrastructure/DB/connection"));
const Movie_1 = require("../../../Movies_Series/infrastructure/Model/Movie");
class Genre extends sequelize_1.Model {
}
exports.Genre = Genre;
Genre.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://es.yam-mag.com/wp-content/uploads/2017/03/banner-kong.jpg",
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    modelName: 'Genre',
    timestamps: false
});
Movie_1.Movie.belongsTo(Genre);
Genre.hasMany(Movie_1.Movie);
//# sourceMappingURL=Genre.js.map