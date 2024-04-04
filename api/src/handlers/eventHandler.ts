import { Request, Response } from "express";
import { createEvent } from "../controllers/eventControllers";

const getAllEventsHandler = (req:Request, res:Response) => {
    res.send("puedo traer varios eventos")
};

const getEventIdHandler = (req:Request, res:Response) => {
    res.send("puedo traer un evento por id")
};

const createEventHandler = async (req:Request, res:Response) => {

    const { title, city, date, content } = req.body;

    try {
        const event = await createEvent( title, city, date, content );
        res.status(200).json(event); 
    } catch ( error:any ) {
        res.status(400).json({error: error.message})
    }
    res.send("puedo crear un evento")
};

export { getAllEventsHandler, getEventIdHandler, createEventHandler }