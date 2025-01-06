import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectDB from "./db/database.js";

const app = express();
const PORT = process.env.PORT || 7000;

dotenv.config();

app.use(express.json()) // To parse the incoming requests with JSON payloads from (req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`⚙️  Server running on PORT ${PORT} `)
})
