import express from "express";
import routes from "./routes";

const v1 = express.Router();
v1.use("/v1", routes);

export default v1;
