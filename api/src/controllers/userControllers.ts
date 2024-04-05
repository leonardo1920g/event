import { QueryResult } from 'pg';
import { db } from '../db';
import { User } from '../models/userModels';

const createUser = async (name: string, email: string, phone: string) => {

    const client = await db.connect();
       
    const result = await client.query(
        "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
        [name, email, phone]
    );
        
    return result.rows[0] as User;
    
};

const getAllUsers = async () => {

    const client = await db.connect();

    const result: QueryResult = await client.query('SELECT * FROM users');
    const users = result.rows;
    client.release();
    
    
    return users;
};

const getUserId = async (id:number) => {

    const client = await db.connect();

    const queryText = `
        SELECT 
            users.*, 
            ARRAY_AGG(events.title) AS events
        FROM 
            users
        LEFT JOIN 
            event_users ON users.id = event_users.user_id
        LEFT JOIN 
            events ON event_users.event_id = events.id
        WHERE 
            users.id = $1
        GROUP BY 
            users.id, users.name, users.email; -- Asegúrate de agregar aquí todas las columnas de la tabla 'users' que deseas seleccionar
    `;

    const result: QueryResult = await client.query(queryText, [id]);
    const user = result.rows[0];

    return user;

};

const updateEventActiveStatus = async (eventId:string) => {

    const client = await db.connect();
    
    const queryText = 'UPDATE events SET active = true WHERE id = $1';
        await client.query(queryText, [eventId]);
    
        client.release();
    
};

const associateEventToUser = async (userId:string, eventId:string) => {
    const client = await db.connect();
    
        const queryText = 'INSERT INTO event_users(user_id, event_id) VALUES ($1, $2)';
        await client.query(queryText, [userId, eventId]);
    
        client.release();
    
};

export { createUser, getAllUsers, getUserId, updateEventActiveStatus, associateEventToUser };