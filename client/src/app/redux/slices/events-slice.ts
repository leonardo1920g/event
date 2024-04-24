import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { Events } from "../Types";
import { fetchEvents } from "../actions";

const initialState: Events[] = [];

export const eventsSlice = createSlice ({

    name: "events", 
    initialState,
    reducers: {},

    extraReducers: ( builder: ActionReducerMapBuilder<Events[]>) => {
        builder.addCase( fetchEvents.fulfilled, ( state, action ) => {
            return action.payload
        })
    },
});

export const {} = eventsSlice.actions