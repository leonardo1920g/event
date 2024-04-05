import { Router } from "express";
import { createUserHandler, getUserIdHandler, getUsersHandler, updateUserEventHandler } from "../handlers/userHandler";

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserIdHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:userId/event/:eventId", updateUserEventHandler);

export { userRouter }