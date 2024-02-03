import express from "express";

import exampleRoutes from "./example.route";

const routes = express.Router();

routes.use("/example", exampleRoutes);

export default routes;
