import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect("mongodb+srv://saranga:saranga@mern-realstate.r6v7v44.mongodb.net/mern-realstate?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use('/backend/user', userRouter);
app.use('/backend/auth', authRouter);