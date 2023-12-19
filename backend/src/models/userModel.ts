import mongoose from "mongoose";
import { User, UserSchema } from "../utils/types";

export const userSchema = new mongoose.Schema<UserSchema>({
        username: { type: String, required: true },
        password: {type: String, required: true}
    }
)

export const userModel = mongoose.model("Users", userSchema);

export default userModel;