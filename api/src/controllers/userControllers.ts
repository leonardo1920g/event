import { db } from '../db';
import { User } from '../models/userModels';

const createUser = async (name: string, email: string, phone: string): Promise<User> => {

    const client = await db.connect();
       
    const result = await client.query(
        "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
        [name, email, phone]
    );
        
    return result.rows[0] as User;
    
};

export { createUser };