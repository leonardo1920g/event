import { Router } from "express";
import { createEventHandler, getAllEventsHandler, getEventIdHandler } from "../handlers/eventHandler";

const eventRouter = Router();

eventRouter.get("/", getAllEventsHandler);
eventRouter.get("/:id", getEventIdHandler);
eventRouter.post("/", createEventHandler)

export { eventRouter }