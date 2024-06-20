import { Router } from 'express';
import { userController } from '../controllers/userController.js';

export const userRouter = Router();

userRouter.get("/sign-up", userController.user_create_get);
userRouter.post("/sign-up", userController.user_create_post);