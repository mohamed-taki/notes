import { Request, Response } from "express"
import { generateUserJWTToken } from "../utils/utils";
export const registerUser = (req:Request, res:Response) => {
    const { username, password } = req.body;
    if(username && password){
        const token = generateUserJWTToken( { username, password } );
        res.status(200);
        res.json({
            success: true,
            token
        });
    }else{
        throw new Error("All fields are required (username, password)");
    }
} 


export const loginUser = (req:Request, res:Response) => {
    res.status(200);
    res.json(req.body.user);
} 