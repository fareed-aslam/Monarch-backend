import mongoose from "mongoose";
let isConnected = false;

export const connectDb = async () => {
  if (isConnected) {
    // agar pehle se connect hai to dobara mat connect kar
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );

    isConnected = true;
    console.log(
      `✅ MongoDB connected || Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    throw new Error("DB Connection Error"); // process.exit mat use karna
  }
};
