import { Router } from 'express';
import * as userController from '../controllers/user_controller.js';

export const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.post('/:user_id', userController.getUserById);
userRouter.post('/:user_id', userController.updateUserById);
userRouter.post('/:user_id', userController.deleteProductById);
