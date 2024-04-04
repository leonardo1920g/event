import { Router } from "express";
import { userRouter } from "./userRouter";
import { eventRouter } from "./eventRouter";

const mainRouter = Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/events" , eventRouter);

export { mainRouter };