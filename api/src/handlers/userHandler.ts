import { Request, Response } from "express";
import { createUser, getAllUsers, getUserId,updateEventActiveStatus, associateEventToUser } from "../controllers/userControllers";


const getUsersHandler = async (req:Request, res:Response) => {

    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error:any) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getUserIdHandler = async (req:Request, res:Response) => {

    const {id} = req.params;

    try {
        
        const user = await getUserId(parseInt(id))
        res.status(200).json(user);

    } catch (error:any) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
        
    };

};

const createUserHandler = async (req: Request, res: Response) => {

    const { name, email, phone } = req.body;

    try {
        const newUser = await createUser(name, email, phone);
        res.status(201).json(newUser);
    } catch (error:any) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const updateUserEventHandler = async (req: Request, res: Response) => {
    
    const userId = req.params.userId;
    const eventId = req.params.eventId;

    try {
    
        await updateEventActiveStatus(eventId);

        await associateEventToUser(userId, eventId);

        res.status(200).json({ message: 'Evento actualizado y asociado al usuario correctamente' });
    } catch (error) {
        console.error('Error al actualizar evento y asociar al usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


export { getUsersHandler, getUserIdHandler, createUserHandler, updateUserEventHandler}