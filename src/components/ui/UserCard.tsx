// src/components/UserCard.tsx
"use client";
import React from "react";

type UserCardProps = {
  name: string;
  photo: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, photo }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <div className="">
          <img
            alt={name}
            className="w-150 h-150  rounded-md object-cover"
            src={photo}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
