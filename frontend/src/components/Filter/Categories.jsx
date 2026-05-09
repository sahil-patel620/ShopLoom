import React from "react";

const Categories = ({ types }) => {
  return (
    <div className="">
      {types?.map((type) => {
        return (
          <div className="flex items-center p-1">
            <input
              type="checkbox"
              // id={type?.code}
              name={type?.code}
              // value={type?.code}
              className="border border-gray-300 rounded-xl w-4 h-4 accent-black text-black"
            />
            <label
              htmlFor={type?.code}
              className="px-2 text-[14px] text-gray-600 "
            >
              {type?.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
