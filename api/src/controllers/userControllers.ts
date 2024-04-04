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

    const result: QueryResult = await client.query(`SELECT * FROM users WHERE id = $1`, [id]);
    const user = result.rows[0];

    return user;

}

export { createUser, getAllUsers, getUserId };