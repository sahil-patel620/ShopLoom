import React from "react";
import { HiOutlineArrowRight, HiOutlineChevronRight } from "react-icons/hi";

const Card = ({
  imagePath,
  title,
  description,
  actionArrow,
  height,
  width,
}) => {
  return (
    <div className="flex flex-col p-8">
      <img
        style={{
          height: height || "240px",
          maxWidth: width || "200px",
        }}
        className="w-full object-cover bg-center border-0 rounded hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        src={imagePath}
        alt={title}
      />
      <div className="flex justify-between items-center ">
        <div className="flex flex-col ">
          <p className="text-[16px] pt-2">{title}</p>
          {description && <p className="text-[14px] pt-1.25 text-gray-600">{description}</p>}
        </div>
        {actionArrow && <span className="cursor-pointer pr-2 items-center"><HiOutlineChevronRight /></span>
        }
      </div>
    </div>
  );
};

export default Card;
