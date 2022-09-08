"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieValue = void 0;
const uuid_1 = require("uuid");
class MovieValue {
    constructor({ image, title, date, qualification, GenreId }) {
        this.id = (0, uuid_1.v4)();
        this.image = image;
        this.title = title;
        this.date = date;
        this.qualification = qualification;
        this.GenreId = GenreId;
    }
}
exports.MovieValue = MovieValue;
//# sourceMappingURL=movieValue.js.map