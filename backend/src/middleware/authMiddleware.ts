import { Request, Response, NextFunction } from "express"
export const checkForTokenExist = (req:Request, res: Response, next:NextFunction) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token = '';
        next();
    }else{
        res.status(203);
        throw new Error("Authentication failed, No token provided!")
    }
}