import { Router } from "express";
import {checkForTokenExist} from '../middleware/authMiddleware'
import { loginUser, registerUser } from "../controllers/userController";
const userRouter = Router();


userRouter.post('/signup', registerUser);
userRouter.post('/login', checkForTokenExist, loginUser);


export default userRouter;