import { ActionTypes, AppState, Action } from "./Types";

const initialState: AppState = {

    users: [],
    user: [],
};

const rootReducer = (state: AppState = initialState, action:Action): AppState => {
    switch (action.type){

        case ActionTypes.GET_USERS:
            return {
                ...state, users: [ ...state.users, action.payload]
            }
        default:
            return state
    }
};

export default rootReducer;