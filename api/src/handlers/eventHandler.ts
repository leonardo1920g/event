import { Request, Response } from "express";

const getAllEventsHandler = (req:Request, res:Response) => {
    res.send("puedo traer varios eventos")
};

const getEventIdHandler = (req:Request, res:Response) => {
    res.send("puedo traer un evento por id")
};

const createEventHandler = (req:Request, res:Response) => {
    res.send("puedo crear un evento")
};

export { getAllEventsHandler, getEventIdHandler, createEventHandler }