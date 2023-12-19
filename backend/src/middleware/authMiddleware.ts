import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkForUserTokenExist = (req:Request, res: Response, next:NextFunction) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token = req.headers.authorization.split(' ')[1]; 

        if(process.env.JWT_SECRET){
            jwt.verify(token, process.env.JWT_SECRET, (err, data)=> {
                if(err){
                    res.status(500);
                    throw new Error(err.message);
                }else{
                    req.body.user = data;
                }
            });
        }else{  
            res.status(500);
            throw new Error(process.env.NODE_ENV === "production" ? "Something went wrong." : "Invalid token salt.")
        }
        next();
    }else{
        res.status(203);
        throw new Error("Authentication failed, No token provided!")
    }
}