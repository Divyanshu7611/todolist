import mongoose, { Document, Schema } from "mongoose";

interface UserDocument extends Document {
  name: string;
  email: string;
  phone: string;
  gender: string;
  password: string;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  }
  // { timestamps: true }
);

const User =
  mongoose.models.user || mongoose.model<UserDocument>("user", userSchema);

export default User;
