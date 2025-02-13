import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) throw new Error("please define mongodb uri");
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to ${NODE_ENV}`);
  } catch (error) {
    console.error("error connection:", error);
    process.exit(1);
  }
};
export default connectToDatabase;
