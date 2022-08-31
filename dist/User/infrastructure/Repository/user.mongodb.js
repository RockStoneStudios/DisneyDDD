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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const UserSchema_1 = __importDefault(require("../Model/UserSchema"));
class MongoRepository {
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield UserSchema_1.default.find();
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserSchema_1.default.findOne({ id }).select('-_id -id -password');
            return user;
        });
    }
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield UserSchema_1.default.create(user);
            return newUser;
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserSchema_1.default.findOne({ email: email });
            return user;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserSchema_1.default.findOneAndDelete({ id: id });
            return user;
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateUser = yield UserSchema_1.default.findOneAndUpdate({ id: id }, user, { new: true });
            return updateUser;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserSchema_1.default.findOne({ email });
            return user;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=user.mongodb.js.map