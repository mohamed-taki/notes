import { Request, Response } from "express";
import noteModel from "../models/notesModel";
import asyncHandler from "express-async-handler";
import userModel from "../models/userModel";
import { Note, NoteSchema, UserSchema } from "../utils/types";

export const getUserNotes = asyncHandler(
  async (req: Request, res: Response) => {
    const notes = await noteModel.find({ user: req.body.user._id });
    res.status(200).json({
      success: true,
      notes,
    });
  }
);

export const addNote = asyncHandler(async (req: Request, res: Response) => {
  const { content, user } = req.body;

  if (user) {
    const newNote = await noteModel.create({
      content,
      user: user._id,
      isUpdated: false,
    });
    if (newNote) {
      res.status(200).json({
        success: true,
        note: newNote,
      });
    } else {
      res.status(401);
      throw new Error("Couldn't create new note");
    }
  } else {
    res.status(401);
    throw new Error("No user found");
  }
});

export const updateNote = asyncHandler(async (req: Request, res: Response) => {
  try {
    const note = await noteModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      success: true,
      note,
    });
  } catch (error: any) {
    throw new Error(error);
  }
});

export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  if(id){
    try {
      const noteRes = await noteModel.findOneAndDelete({ _id: id }, { new: true });
      if (noteRes) {
        res.status(200).json({
          success: true,
          note : noteRes
        })
      }else{
        res.status(400);
        throw new Error("Couldn't delete this note!");
      }
    } catch (error:any) {
      throw new Error(error);
    }
  }else{
    throw new Error("ERROR: Invalida Note id");
  }
});
