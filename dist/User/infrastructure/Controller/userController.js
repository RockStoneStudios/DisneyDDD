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
exports.UserController = void 0;
const encryptPassword_1 = require("../utils/encryptPassword");
const Signature_1 = require("../utils/Signature");
class UserController {
    constructor(userCase) {
        this.userCase = userCase;
        this.getAllUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userLogin = yield this.userCase.getUserById(req.user);
            console.log(userLogin);
            if (userLogin === null || userLogin === void 0 ? void 0 : userLogin.isAdmin) {
                try {
                    const users = yield this.userCase.getAllUser();
                    return res.status(200).json(users);
                }
                catch (error) {
                    return res.status(500).json(error);
                }
            }
            return res.status(403).json({ message: "Access Denied!!" });
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id + ' -- ' + req.user);
            if (id === req.user) {
                try {
                    const user = yield this.userCase.getUserById(id);
                    return res.status(200).json(user);
                }
                catch (error) {
                    return res.status(500).json(error);
                }
            }
            else {
                return res.status(403).json({ message: "Access Denied!!" });
            }
        });
        this.registerUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            const userExist = yield this.userCase.getUserByEmail(req.body.email);
            if (userExist)
                return res.status(401).json({ message: "This User has been already Exist with this Email!!" });
            newUser.password = yield (0, encryptPassword_1.encryptPassword)(newUser.password);
            try {
                const user = yield this.userCase.createUser(newUser);
                return res.status(200).json({ message: `the User ${newUser.firstname} has been created with Successfull` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (req.user === req.params.id) {
                try {
                    const user = yield this.userCase.deleteUser(req.params.id);
                    return res.status(201).json({ message: `the User has been Delete with Successfull` });
                }
                catch (error) {
                    return res.status(500).json(error);
                }
            }
            return res.status(403).json({ message: "Access Denied !!" });
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (req.user === req.params.id) {
                try {
                    const user = yield this.userCase.updateUser(req.params.id, req.body);
                    return res.status(200).json(user);
                }
                catch (error) {
                    return res.status(500).json(error);
                }
            }
            return res.status(403).json({ message: "Access Denied !!" });
        });
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userExist = yield this.userCase.getUserByEmail(req.body.email);
                if (!userExist)
                    return res.status(404).json({ message: "User Not Found" });
                const comparePassword = yield (0, encryptPassword_1.passwordCompare)(req.body.password, userExist.password);
                if (!comparePassword)
                    return res.status(403).json({ message: "The password do not match" });
                const payload = {
                    id: userExist.id,
                    email: userExist.email,
                    isAdmin: userExist.isAdmin
                };
                const token = (0, Signature_1.generateSignature)(payload);
                return res.status(200).json({ message: "Loggin Successful", token });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map