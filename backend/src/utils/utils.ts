import jwt, { Jwt } from 'jsonwebtoken';
import { UserToken } from './types';

export const generateUserJWTToken = (data:UserToken) => {
    return jwt.sign(data, "shhh", {
        expiresIn: "10h"
    })
}