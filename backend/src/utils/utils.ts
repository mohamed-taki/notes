import jwt, { Jwt } from 'jsonwebtoken';
import { UserToken } from './types';

export const generateUserJWTToken = (data:UserToken) => {
    if(process.env.JWT_SECRET){
        return jwt.sign(data, process.env.JWT_SECRET, {
            expiresIn: "1d",
        })
    }else{
        throw new Error("Invalid token salt.");
    }
}