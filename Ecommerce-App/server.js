import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//configure enviornment file
dotenv.config();

//database config
connectDB();

//rest Object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Hey Harsh Here How are you? can we start coding",
  });
});

//PORT
const PORT = process.env.PORT || -8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.DEV_MODE} on ${PORT}`.bgYellow.black
  );
});
