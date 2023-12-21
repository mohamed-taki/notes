import { Request, Response, NextFunction } from "express"
export const stdErrorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    res.status(res.statusCode | 400);
    // res.status(400);
    res.json({
        success: false,
        message: err.message,
        stack : process.env.NODE_ENV === "production" ? null : err.stack,
    });
}


export default stdErrorHandler;