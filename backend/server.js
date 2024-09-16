import express from "express";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.route.js";
import { connectDB } from "./lib/connectDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser)
app.use("/api/v1/auth", authRoute);

app.listen(PORT, (req, res) => {
  console.log("server started on : " , PORT);
  connectDB();
});
