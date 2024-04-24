import React from 'react';

interface CardProps {
  name: string;
  email: string;
  phone: string;
}

const UserCard: React.FC<CardProps> = ({ name, email, phone }) => {
  return (
    <div className='bg-sky-900 text-white border-white p-5 rounded-lg'>
      <div className="space-y-2">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-xs">Mail: {email}</p>
        <p className="text-xs">Phone: {phone}</p>
      </div>
    </div>
  );
};

export default UserCard;