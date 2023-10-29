import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default:'https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg'
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
