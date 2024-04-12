export interface User {
    id: number;
    name: string;
};

export interface Users {
    name: string;
    email: string;
    phone: string;
}

export interface AppState {
    user: User[];
    users: Users[];

};

export enum ActionTypes {
    ADD_USER = "ADD_USER",
    GET_USERS = "GET_USERS",
};


export interface GetAllUsers {
    type: ActionTypes.GET_USERS;
    payload: Users;
};

export interface AddUserAction {
    type: ActionTypes.ADD_USER;
    payload: User;
};

export type Action = AddUserAction | GetAllUsers;