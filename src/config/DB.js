import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(
      `MONGODB connected||DB HOST is ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB conection failed...", error);
    process.exit(1);
  }
};
