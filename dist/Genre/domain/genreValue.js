"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreValue = void 0;
const uuid_1 = require("uuid");
class GenreValue {
    //   movies : IMovie[];
    constructor({ image, name }) {
        this.id = (0, uuid_1.v4)();
        this.image = image;
        this.name = name;
        //   this.movies = movies;
    }
}
exports.GenreValue = GenreValue;
//# sourceMappingURL=genreValue.js.map