import { Request, Response } from "express"
import { generateUserJWTToken } from "../utils/utils";
export const registerUser = (req:Request, res:Response) => {

    const token = generateUserJWTToken({username: "mohamed", password: "mohamed"});

    res.json({
        success: true,
        token
    });
} 
export const loginUser = (req:Request, res:Response) => {
    // res.status(200);
    res.send('hi');
} 