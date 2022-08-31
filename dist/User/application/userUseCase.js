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
exports.UserUseCase = void 0;
const userValue_1 = require("../domain/userValue");
class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        /**
         * getAllUserCase
         */
        this.getAllUser = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.getAllUser();
            return users;
        });
        /**
         * get User By Id
         * @param id
         * @returns
         */
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getUserById(id);
            return user;
        });
        this.createUser = ({ firstname, lastname, age, email, password, isAdmin }) => __awaiter(this, void 0, void 0, function* () {
            const newUserValue = new userValue_1.UserValue({ firstname, lastname, age, email, password, isAdmin });
            const user = this.userRepository.registerUser(newUserValue);
            return user;
        });
        this.updateUser = (id, { firstname, lastname, age, email, password, isAdmin }) => __awaiter(this, void 0, void 0, function* () {
            const userValue = new userValue_1.UserValue({ firstname, lastname, age, email, password, isAdmin });
            const user = this.userRepository.updateUser(id, userValue);
            return user;
        });
        this.loginUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const userLogin = this.userRepository.loginUser(email, password);
            return userLogin;
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.deleteUser(id);
            return user;
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getUserByEmail(email);
            return user;
        });
    }
}
exports.UserUseCase = UserUseCase;
//# sourceMappingURL=userUseCase.js.map