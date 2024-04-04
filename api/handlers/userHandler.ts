import { Request, Response } from "express";
import { createUser } from "../controllers/userControllers";


const getUsersHandler = (req:Request, res:Response) => {
    res.send("se puede llamara a todos los usuarios")
};

const getUserIdHandler = (req:Request, res:Response) => {
    res.send("se puede llamar a un usuario por id")
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