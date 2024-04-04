import { Router } from "express";
import { createUserHandler, getUserIdHandler, getUsersHandler } from "../handlers/userHandler";

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserIdHandler);
userRouter.post("/", createUserHandler);

export { userRouter }