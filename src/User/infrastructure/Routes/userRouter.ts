import { Router } from "express";
import { MongoRepository } from "../Repository/user.mongodb";
import {UserUseCase} from '../../application/userUseCase'
import { UserController } from "../Controller/userController";
import {checkOut} from '../utils/Signature';

const router = Router();

const mongoRepository = new MongoRepository();

const userUseCase = new UserUseCase(mongoRepository);

const userController = new UserController(userUseCase);

router.get('/',checkOut,userController.getAllUser);
router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.delete('/delete/:id',checkOut,userController.deleteUser);
router.put('/update/:id',checkOut,userController.updateUser);
router.get('/:id',checkOut,userController.getUserById);



export default router;
