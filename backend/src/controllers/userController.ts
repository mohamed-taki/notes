import { Request, Response } from "express";
import { generateUserJWTToken } from "../utils/utils";
import userModel from "../models/userModel";
import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = generateUserJWTToken({ username, password });

    const user = await userModel.create({
      username,
      password,
      token,
    });

    res.status(200).json({
      success: true,
      user,
    });
  }
);

export const loginUser = (req: Request, res: Response) => {
  throw new Error("hi");
  res.status(200);
  res.json(req.body.user);
};
