import React, { useCallback, useState } from "react";

const SizeFilter = ({ sizes }) => {
  const [appliedSizes, setAppliedSizes] = useState([]);

  const onClickDiv = useCallback(
    (item) => {
      if (appliedSizes.indexOf(item) > -1) {
        setAppliedSizes(appliedSizes.filter((size) => size !== item));
      } else {
        setAppliedSizes([...appliedSizes, item]);
      }
    },
    [appliedSizes, setAppliedSizes],
  );

  return (
    <div className="flex flex-col">
      <p className="text-black text-[16px] mt-5 mb-2">Sizes</p>
      <div className="flex flex-wrap p-4">
        {sizes.map((item, index) => {
          return (
            <div className="flex flex-col mr-2 mb-2" key={index}>
              <div
                className="w-15 h-8 flex items-center justify-center border bg-white text-gray-500 border-gray-300 rounded-xl cursor-pointer hover:scale-105"
                style={appliedSizes.includes(item)?{
                    background: 'black',
                    color: 'white' 
                }:{}}
                onClick={() => onClickDiv(item)}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;
