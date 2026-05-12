import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

const ProductCard = ({
  title,
  description,
  price,
  discount,
  rating,
  brand,
  thumbnail,
}) => {
  return (
    <div
      className="flex flex-col hover:scale-102 transition-all duration-200 ease-in-out relative"
    >
      <img
        className="h-80 w-70  border border-gray-300 rounded-lg object-cover cursor-pointer block"
        src={thumbnail}
        alt={title}
      />

      <div className="flex justify-between items-center ">
        <div className="flex flex-col pt-2">
          <p className="text-[16px] p-1">{title}</p>
          {description && (
            <p className="text-[14px] px-1 text-gray-600">{brand}</p>
          )}
        </div>
        <div>
          <p>₹ {price}</p>
        </div>
        <button
          className="absolute top-2 right-2 w-8 h-8 z-10 bg-gray-50 rounded-full flex items-center justify-center"
          onClick={() => console.log("Wishlist btn clicked")}
        >
          <MdFavoriteBorder />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
