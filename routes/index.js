import express from "express";
const router = express.Router();
// const locRouter = require("./location");
// const userRouter = require("./user");
import locRouter from "./location.js";
import userRouter from "./user.js";
router.use("/user", userRouter);
router.use("/location", locRouter);

export default router;
