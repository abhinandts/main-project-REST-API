import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  role: "artist" | "listener";
  password: string;
  isVerified: boolean;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String },
    email: { type: String },
    role: { type: String, enum: ["artist", "listener"] },
    password: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
