import React from 'react';

interface CardProps {
  title: string;
  city: string;
  date: string;
  content: string;
}

const EventCard: React.FC<CardProps> = ({ title,city, date, content }) => {
  return (
    <div className='bg-sky-900 text-white border-white p-5 rounded-lg'>
      <div className="space-y-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xs">Content: {content}</p>
        <p className="text-xs">City: {city}</p>
        <p className="text-xs">Date: {date}</p>
      </div>
    </div>
  );
};

export default EventCard;