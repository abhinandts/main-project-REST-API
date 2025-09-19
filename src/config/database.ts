import mongoose from "mongoose";
import config from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongo);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("err", err);
    process.exit(1);
  }
};

export default connectDB;
