import express from "express";
import chirpsRouter from "./chirps";
import mentionRouter from "./mentions";
import usersRouter from "./users";

const indexRouter = express.Router();

indexRouter.use("/api/chirps", chirpsRouter);
//beginning of the url
//url - get all, singular use

indexRouter.use("/api/mentions", mentionRouter);
export default indexRouter;

indexRouter.use("/api/users", usersRouter);
