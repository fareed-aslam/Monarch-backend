import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";

dotenv.config();

const PORT = process.env.PORT || 5005;

await connectDB();
export default app;
