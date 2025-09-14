import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";

dotenv.config();

const PORT = process.env.PORT || 5005;

await connectDB();
// .then(() => {
//   app.listen(PORT, () => {
//     console.log("server is running");
//   });
// })
// .catch((error) => {
//   console.log("error here", error);
// });
export default app;
