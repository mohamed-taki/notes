import mongoose from "mongoose";
import { NoteSchema } from "../utils/types";

const noteSchema = new mongoose.Schema<NoteSchema>(
  {
    content: {
      type: "String",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const noteModel = mongoose.model<NoteSchema>("Note", noteSchema);
export default noteModel;
