"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValue = void 0;
const uuid_1 = require("uuid");
class UserValue {
    constructor({ firstname, lastname, age, email, password, isAdmin }) {
        this.id = (0, uuid_1.v4)();
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
exports.UserValue = UserValue;
//# sourceMappingURL=userValue.js.map