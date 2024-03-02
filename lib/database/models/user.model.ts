import { Email } from "@clerk/nextjs/server";
import { Schema, model, models } from "mongoose";

export interface IUser {
  clerkID: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planID?: number;
  creditBalance?: number;
}

const UserSchema = new Schema({
  clerkID: { type: String, required: true, unique: true },
  email: { type: Email, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planID: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);
export default User;
