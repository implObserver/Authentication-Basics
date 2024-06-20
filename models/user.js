import mongoose from "mongoose";
import { UserSchema } from "../database/schemas/user.js";

export const User = mongoose.model('User', UserSchema);