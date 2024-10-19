import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    receiveEmails: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userDetail = mongoose.model("user", userSchema);
