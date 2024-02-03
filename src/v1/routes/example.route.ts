import express from "express";
import exampleController from "../controllers/example.controller";
const router = express.Router();

router.get("/test", exampleController.func);

export default router;
