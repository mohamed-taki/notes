import express, { Express } from "express";
require("dotenv").config();

import stdErrorHandler from "./middleware/errorHandler";
import userRouter from "./routes/userRoute";

const app: Express = express();
const port: number = Number(process.env.PORT) || 5000;

app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.use(stdErrorHandler);

app.listen(port, () => {
  console.log(`Started server on port : http://localhost:${port}`);
});