import { Request, Response } from "express";
import { generateUserJWTToken } from "../utils/utils";
import userModel from "../models/userModel";
import asyncHandler from "express-async-handler";
import { Error } from "mongoose";
import { ErrorDescription } from "mongodb";
import { User, UserSchema } from "../utils/types";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = generateUserJWTToken({ username, password });

    try {
      const user = await userModel.create({
        username,
        password,
        token,
      });
  
      res.status(200).json({
        success: true,
        user,
      });
      
    } catch (error:any) {
      res.status(404);  
      throw error
    }
    
  }
);

export const loginUser = asyncHandler( async (req: Request, res: Response) => {
  const {username, password } = req.body;
  const user:User | null = await userModel.findOne({username, password});

  if(user){
    user.token = generateUserJWTToken({username: user.username, password: user.password})
    await userModel.updateOne({"_id":user._id}, {token: user.token});
    res.status(200).json({
      success: true,
      user,
    })
  }else{
    res.status(400);
    throw new Error("Invalid credentials.")
  }
});
