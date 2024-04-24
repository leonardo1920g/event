import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../Types";

const initialState: AppState = {

    users: [],    

};


export const Users = createSlice ({
    name: "users", 
    initialState,
    reducers: {
        
    }
})