import { NextFunction, Response, Request } from "express"

export const checkMissingFields = (requiredFields : string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const missingFields: string[] = [];
        
        requiredFields.forEach(field => {
            if(!(field in req.body)){
                missingFields.push(field);
            }
        });

        if(missingFields.length > 0){
            res.statusCode = 301;
            throw new Error(`All fields are required! (${missingFields.join(", ")})`)
        }else{
            next();
        }
    }
}