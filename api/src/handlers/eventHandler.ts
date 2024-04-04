import { Request, Response } from "express";
import { createEvent, getAllEvents, getEventId } from "../controllers/eventControllers";

const getAllEventsHandler = async (req: Request, res: Response) => {

    try {
        const events = await getAllEvents();
        res.status(200).json(events);

    } catch (error: any) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getEventIdHandler = async (req:Request, res:Response) => {
    
    const { id } = req.params;

    try {
        
        const event = await getEventId(parseInt(id));
        res.status(200).json(event);

    } catch ( error:any ) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const createEventHandler = async (req:Request, res:Response) => {

    const { title, city, date, content } = req.body;

    try {
        const event = await createEvent( title, city, date, content );
        res.status(200).json(event); 
    } catch ( error:any ) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export { getAllEventsHandler, getEventIdHandler, createEventHandler }