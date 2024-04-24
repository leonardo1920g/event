"use client"

import UserCard from "@/components/UserCard";
import { UseAppSelector, useAppDispatch } from "../redux/Hooks";
import { useEffect } from "react";
import { fetchUsers } from "../redux/actions";

const users = () => {

    const dispatch = useAppDispatch();
    const users = UseAppSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }), [dispatch]

    return (
        <div className="container relative m-auto">
            <div className="p-10">
                <h1 className="font-bold text-4xl">
                    Users
                </h1>

                <div className="py-10 grid grid-cols-4 gap-10">
                    {users.map(user=>{
                        return<UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}                   
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default users;