import { Pool } from "pg";
import "dotenv/config";


const { DB_USER, DB_PASSWORD } = process.env

const db = new Pool ({
    user: DB_USER,
    host: 'localhost',
    database: 'eventos',
    password: DB_PASSWORD,
    port: 5432,
});

export { db };