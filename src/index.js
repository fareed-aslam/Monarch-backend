import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";

dotenv.config();

const PORT = process.env.PORT || 5005;

await connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Server failed...", error);
  });
