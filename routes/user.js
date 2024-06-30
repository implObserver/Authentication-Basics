import { Router } from 'express';
import { userController } from '../controllers/userController.js';

export const userRouter = Router();

userRouter.get("/sign-up", userController.user_create_get);
userRouter.post("/sign-up", userController.user_create_post);
userRouter.get("/log-in", userController.user_auth_get);
userRouter.post("/log-in", userController.user_auth_post);
userRouter.get("/log-out", userController.user_logout_get);
userRouter.get("/protected", userController.user_auth_jwt_protected);
userRouter.get("/success", userController.sucessProtected);
userRouter.get("/failure", userController.failureProtected);