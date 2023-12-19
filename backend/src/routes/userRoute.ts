import { Router } from "express";
import { checkForUserTokenExist } from "../middleware/authMiddleware";
import { loginUser, registerUser } from "../controllers/userController";
const userRouter = Router();

userRouter.post("/signup", registerUser);
userRouter.post("/login", checkForUserTokenExist, loginUser);

export default userRouter;