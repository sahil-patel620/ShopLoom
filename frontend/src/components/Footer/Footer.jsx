import React from "react";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

const Footer = ({ content }) => {
  return (
    <div className="bg-black text-white ">
      <div className="flex  p-8 justify-around ">
        {content?.items &&
          content?.items.map((item, index) => {
            return (
              <div className="flex flex-col mt-6">
                <p className="text-[18px] pb-2.5 font-bold uppercase tracking-widest text-gray-100 ">{item?.title}</p>
                {item?.list &&
                  item?.list?.map((listItem, listIndex) => (
                    <a
                      className="flex flex-col text-[12px] py-2  "
                      href={listItem?.path || "#"}
                    >
                      {listItem?.label || "item"}
                    </a>
                  ))}
                {item?.description && (
                  <p className="text-[12px] py-2">{item?.description}</p>
                )}
              </div>
            );
          })}
      </div>
      <div className="flex gap-2 justify-center py-4">
        <a href="/fb">
          <FaSquareFacebook className="text-4xl text-gray-200 transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] cursor-pointer" />
        </a>
        <a href="/insta">
          <FaSquareInstagram className="text-4xl text-gray-200 hover:text-red-500 transition-all hover:scale-105 hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] cursor-pointer " />
        </a>
      </div>
      <p className="text-sm mt-0 pb-4 text-white text-center content-center">
        {content?.copyright}
      </p>
    </div>
  );
};

export default Footer;
