import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectDB from "./db/database.js";

import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 7000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // To parse the incoming requests with JSON payloads from (req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log(`⚙️  Server running on PORT ${PORT} `);
});
