import { DateTime } from "luxon";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});