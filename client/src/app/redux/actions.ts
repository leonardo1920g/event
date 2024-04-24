import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk( 'users/fetchUsers', async () => {
    const res = await fetch('http://localhost:3003/users');
    const data = await res.json();
    return data;
});