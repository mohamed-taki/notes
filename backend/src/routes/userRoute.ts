import { Router } from "express";
import { checkForUserTokenExist } from "../middleware/authMiddleware";
import { loginUser, registerUser, verifyTokenValidity } from "../controllers/userController";
import { checkMissingFields } from "../middleware/fieldsMiddleware";
const userRouter = Router();

userRouter.post("/signup", checkMissingFields(["username", "password"]), registerUser);
userRouter.post("/login", checkMissingFields(["username", "password"]), loginUser);
userRouter.post("/checkToken", checkForUserTokenExist, verifyTokenValidity);

export default userRouter;