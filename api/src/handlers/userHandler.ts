import { Request, Response } from "express";
import { createUser, getAllUsers, getUserId } from "../controllers/userControllers";


const getUsersHandler = async (req:Request, res:Response) => {

    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
};

const getUserIdHandler = async (req:Request, res:Response) => {

    const {id} = req.params;

    try {
        
        const user = await getUserId(parseInt(id))
        res.status(200).json(user);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
        
    };

};

const createUserHandler = async (req: Request, res: Response) => {

    const { name, email, phone } = req.body;

    try {
        const newUser = await createUser(name, email, phone);
        res.status(201).json(newUser);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};


export { getUsersHandler, getUserIdHandler, createUserHandler}