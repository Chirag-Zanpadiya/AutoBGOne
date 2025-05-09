import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("hii i am chirag");
    });

    app.on("error", (error) => {
      console.log(`Application Errors :  ${error}`);
      //   throw error
      process.exit(1);
    });

    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB CONNECTION FAILED :: src/index.js :: ${err}`);
  });

// middlewares

// API routes
