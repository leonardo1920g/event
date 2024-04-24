import React from 'react';

interface CardProps {
  name: string;
  email: string;
  phone: string;
  image: string;
}

const UserCard: React.FC<CardProps> = ({ name, email, phone, image }) => {
  return (
    <div className='bg-sky-900 text-white border-white p-5 rounded-lg'>
      <div className="card">
        <div className="flex justify-center">
          <img src={image} alt={name} className="w-50 h-50 mb-2 rounded-lg" />
        </div>
        <p className="text-xl font-bold">{name}</p>
        <p className="text-xs">Mail: {email}</p>
        <p className="text-xs">Phone: {phone}</p>
      </div>
    </div>
  );
};

export default UserCard;