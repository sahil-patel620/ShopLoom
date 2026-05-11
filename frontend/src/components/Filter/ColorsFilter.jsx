import React, { useCallback, useState } from "react";

const colorSelector = {
  Purple: "#8434E1",
  Black: "#252525",
  White: "#FFFFFF",
  Gray: "#808080",
  Blue: "#0000FF",
  Red: "#FF0000",
  Orange: "#FFA500",
  Navy: "#000080",
  Grey: "#808080",
  Yellow: "#FFFF00",
  Pink: "#FFC0CB",
  Green: "#008000",
};

const ColorsFilter = ({ colors }) => {
  const [appliedColors, setAppliedColors] = useState([]);

  const onClickDiv = useCallback((item) => {
      if (appliedColors.indexOf(item) > -1) {
        setAppliedColors(appliedColors.filter((color) => color !== item));
      } else {
        setAppliedColors([...appliedColors, item]);
      }
    },
    [appliedColors],
  );

  return (
    <div className="flex flex-col">
      <p className="text-black text-[16px] mt-5 mb-2">Colors</p>
      <div className="flex flex-wrap p-4">
        {colors.map((item, index) => {
          return (
            <div className="flex flex-col mr-2 mb-2" key={index}>
              <div
                className="w-8 h-8 mr-4 border border-gray-300 rounded-xl cursor-pointer hover:scale-105 "
                onClick={()=>  onClickDiv(item)}
                style={{ background: `${colorSelector[item]}` }}
              >
                {" "}
              </div>
              <p className="text-gray-500 text-[12px]" style={{color:`${appliedColors?.includes(item) ? 'black':''}`}}>{item}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsFilter;
