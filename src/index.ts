import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";

import v1 from "./v1";
import { initializeDB } from './db';

const PORT = +process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", v1);

app.listen(PORT, () => {
  initializeDB().then(
    async () => {
      try {
        console.log("database successfully initialized");
      } catch (error) {
        console.error(error.message || error);
      }
    },
    (error) => {
      setTimeout(() => {
        console.log(error)
      }, 5000);
    }
  );
  console.log(`Server listening on port ${PORT}`);
});