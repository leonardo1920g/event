import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk( 'users/fetchUsers', async () => {
    const res = await fetch('http://localhost:3003/users');
    const data = await res.json();
    return data;
});

export const fetchEvents = createAsyncThunk( 'events/fetchEvents', async () => {
    const res = await fetch('http://localhost:3003/events');
    const data = await res.json();
    return data;
})