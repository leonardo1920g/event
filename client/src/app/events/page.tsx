"use client";

import EventCard from "@/components/EventCard";
import { UseAppSelector, useAppDispatch } from "../redux/Hooks";
import { useEffect } from "react";
import { fetchEvents } from "../redux/actions";

const events = () => {

    const dispatch = useAppDispatch();
    const events = UseAppSelector(state => state.events);

    useEffect(() => {
        dispatch(fetchEvents());
    }),[dispatch];

    return (
        <div className="container relative m-auto">
            <div className="p-10">
                <p className="font-bold text-4xl">
                    Events
                </p>

                <div className="py-10 grid grid-cols-4 gap-10">
                    {events.map(event=>{
                        return<EventCard
                            key={event.id}
                            title={event.title}
                            content={event.content}
                            city={event.city}
                            date={event.date}
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default events;