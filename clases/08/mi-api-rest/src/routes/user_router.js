import { Router } from 'express';
import * as userController from '../controllers/user_controller.js';

export const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);