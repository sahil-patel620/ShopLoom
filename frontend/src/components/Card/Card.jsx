import React from "react";

const Card = ({ imagePath, title }) => {
  return (
    <div className="flex flex-col p-8">
      <img
        className="h-65 w-60 bg-cover bg-center border-0 rounded hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        src={imagePath}
        alt={title}
      />
      <p className="text-[16px] pt-1.25">{title}</p>
    </div>
  );
};

export default Card;
