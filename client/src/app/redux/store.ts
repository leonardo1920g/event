import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users-slice";
import { eventsSlice } from "./slices/events-slice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        events: eventsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
