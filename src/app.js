import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { configureCors } from "./config/corsConfig.js";

export const app = express();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(configureCors());

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";

// app.use("/", (req, res) => {
//   res.send("Api working");
// });

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/chat", chatRouter);
