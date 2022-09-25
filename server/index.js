import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import eventRoute from "./Routes/Event.js";

// app.use(bodyParser, urlencoded({ extended: true }));
const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection is successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/events", eventRoute);

app.listen(process.env.PORT, () => {
  console.log("server listening on port 5000");
});
