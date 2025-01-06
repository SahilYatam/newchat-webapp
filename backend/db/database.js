import mongoose from "mongoose";

const DB_NAME = "chatapp";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("\n MongoDB Connected Successfully 🤝 !");
  } catch (error) {
    console.log("Error while connected to mongoDB", error.message);
  }
};

export default connectDB;