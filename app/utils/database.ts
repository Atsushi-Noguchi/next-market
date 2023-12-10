import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gunogunoatu:4EZCM0ndsgsY3W9J@cluster0.8ww5a9x.mongodb.net/nextAppDataBase?retryWrites=true&w=majority"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Error: Failed to connect to MongoDB");
    throw new Error();
  }
};

export default connectDB;
