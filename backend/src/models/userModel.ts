import mongoose from "mongoose";
import { User, UserSchema } from "../utils/types";

export const userSchema = new mongoose.Schema<UserSchema>({
        username: { type: String, required: true, unique: true },
        password: {type: String, required: true},
        token: {type: String, required: false}
    }, {
        timestamps: true,
    }
)

export const userModel = mongoose.model<UserSchema>("Users", userSchema);
userModel.createIndexes(); 
export default userModel;