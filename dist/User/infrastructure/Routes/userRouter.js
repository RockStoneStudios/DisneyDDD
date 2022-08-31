"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_mongodb_1 = require("../Repository/user.mongodb");
const userUseCase_1 = require("../../application/userUseCase");
const userController_1 = require("../Controller/userController");
const Signature_1 = require("../utils/Signature");
const router = (0, express_1.Router)();
const mongoRepository = new user_mongodb_1.MongoRepository();
const userUseCase = new userUseCase_1.UserUseCase(mongoRepository);
const userController = new userController_1.UserController(userUseCase);
router.get('/', Signature_1.checkOut, userController.getAllUser);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.delete('/delete/:id', Signature_1.checkOut, userController.deleteUser);
router.put('/update/:id', Signature_1.checkOut, userController.updateUser);
router.get('/:id', Signature_1.checkOut, userController.getUserById);
exports.default = router;
//# sourceMappingURL=userRouter.js.map