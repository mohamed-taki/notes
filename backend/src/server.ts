import express, { Express } from "express";
require("dotenv").config();

import cors from "cors";

import connectDB from "./config/db";

import errorHandler from "./middleware/errorHandler";
import userRouter from "./routes/userRoute";
import notesRoute from "./routes/notesRoute";

connectDB();

const app: Express = express();
const port: number = Number(process.env.PORT) || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api/users", userRouter);
app.use("/api/notes", notesRoute);

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Started server on port : http://localhost:${port}`);
});