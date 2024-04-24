"use client";

import EventCard from "@/components/EventCard";

const events = () => {

    const eventos = [
        {
            "id": 9,
            "title": "proyecto tiki tiki",
            "city": "Bogota",
            "date": "20-22-2024",
            "content": "aqui alla que hay un lugar",
            "active": "false",
            "image": "https://st2.depositphotos.com/2498595/7199/v/450/depositphotos_71993103-stock-illustration-camera-icon-map-pin.jpg"
        },
        {
            "id": 1,
            "title": "proyecto flower",
            "city": "Bogota",
            "date": "20-22-2024",
            "content": "aqui alla que hay un lugar",
            "active": "false",
            "image": "https://st2.depositphotos.com/2498595/7199/v/450/depositphotos_71993103-stock-illustration-camera-icon-map-pin.jpg"
        },
        {
            "id": 8,
            "title": "proyecto tiki tiki",
            "city": "Bogota",
            "date": "20-22-2024",
            "content": "aqui alla que hay un lugar",
            "active": "true",
            "image": "https://st2.depositphotos.com/2498595/7199/v/450/depositphotos_71993103-stock-illustration-camera-icon-map-pin.jpg"
        },
        {
            "id": 10,
            "title": "proyecto flower",
            "city": "Bogota",
            "date": "20-22-2024",
            "content": "aqui alla que hay un lugar",
            "active": "true",
            "image": "https://st2.depositphotos.com/2498595/7199/v/450/depositphotos_71993103-stock-illustration-camera-icon-map-pin.jpg"
        },
        {
            "id": 11,
            "title": "proyecto flower",
            "city": "Bogota",
            "date": "20-22-2024",
            "content": "aqui alla que hay un lugar",
            "active": "true",
            "image": "https://st2.depositphotos.com/2498595/7199/v/450/depositphotos_71993103-stock-illustration-camera-icon-map-pin.jpg"
        }
    ]

    return (
        <div className="container relative m-auto">
            <div className="p-10">
                <p className="font-bold text-4xl">
                    Events
                </p>

                <div className="py-10 grid grid-cols-4 gap-10">
                    {eventos.map(event=>{
                        return<EventCard
                            title={event.title}
                            content={event.content}
                            city={event.city}
                            date={event.date}
                            image={event.image}
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default events;