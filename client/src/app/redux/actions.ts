import { Action, ActionTypes, Users } from "./Types";
import { Dispatch } from "redux";

// export const getUser = (user: User): Action => ({
//     type: ActionTypes.ADD_USER,
//     payload: user,
// })

export const getUsers = () => {

    return async function (dispatch: Dispatch<Action>) {
        try {
            const res = await fetch("http://localhost:3003/users");
            const users: Users = await res.json();
            
            dispatch({ type: ActionTypes.GET_USERS, payload: users })
        } catch ( error ){
            console.error("Error fetching users:", error);
        }
    }
};

