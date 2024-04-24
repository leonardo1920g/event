import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { Users } from "../Types";
import { fetchUsers } from "../actions";

const initialState: Users[] = [];

export const usersSlice = createSlice ({

    name: "users", 
    initialState,
    reducers: {},

    extraReducers: ( builder: ActionReducerMapBuilder<Users[]>) => {
        builder.addCase( fetchUsers.fulfilled, ( state, action ) => {
            return action.payload
        })
    },
});

export const {} = usersSlice.actions