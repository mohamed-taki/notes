import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import userModel from "../models/userModel";
import { User, UserToken } from "../utils/types";
import expressAsyncHandler from "express-async-handler";

export const checkForUserTokenExist = expressAsyncHandler( async (req:Request, res: Response, next:NextFunction) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token = req.headers.authorization.split(' ')[1]; 

        if(process.env.JWT_SECRET){
            await jwt.verify(token, process.env.JWT_SECRET, async (err, data)=> {
                const userInfo = data as UserToken;
                if(err){
                    res.status(403);
                    throw new Error(err.message);
                }else{
                    req.body.user = await userModel.findOne({username: userInfo.username}) ;
                    next();
                }
            });
        }else{  
            res.status(500);
            throw new Error(process.env.NODE_ENV === "production" ? "Something went wrong." : "Invalid token salt.")
        }
        
    }else{
        res.status(203);
        throw new Error("Authentication failed, No token provided!")
    }
})