import { QueryResult } from "pg";
import { db } from "../db";
import { Event } from "../models/eventModel";

const createEvent = async (title:string, city:string, date:string, content:string ) => {

    const client = await db.connect();
    const result = await client.query(
        "INSERT INTO events (title, city, date, content) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, city, date, content]
    );

    return result.rows[0] as Event;
};

const getAllEvents = async () => {

    const client = await db.connect();
    const result: QueryResult = await client.query( 'SELECT * FROM events' );
    const events = result.rows;

    client.release();

    return events;
};

const getEventId = async (id:number) => { 
    
    const client = await db.connect();

    const result: QueryResult = await client.query(`SELECT * FROM events WHERE id = $1`, [id]);
    const event = result.rows[0];

    return event;
};  

export { createEvent, getAllEvents, getEventId }