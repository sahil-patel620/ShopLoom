import React from "react";
import "./Navigation.css";
import {
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-6 gap-40">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <a className="text-3xl text-black font-bold gap-8" href="/">
          ShopLoom
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-10 flex-1">
        {/* Nav items */}
        <ul className="flex gap-8 ">
          <li className="text-grey-600 hover:text-green-500">
            <a href="/">Shop</a>
          </li>
          <li className="text-grey-600 hover:text-green-500">
            <a href="/mens">Men</a>
          </li>
          <li className="text-grey-600 hover:text-green-500">
            <a href="/womens">Women</a>
          </li>
          <li className="text-grey-600 hover:text-green-500">
            <a href="/kids">Kids</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        {/* search bar */}
        <div className="border rounded flex overflow-hidden">
          <div className="flex items-center justify-center px-4 ">
            <HiOutlineSearch 
              className="h-4 w-4 text-grey-dark"
            />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none border-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Action items- icons */}
        <ul className="flex gap-8">
          <li>
            <button>
              <HiOutlineHeart className="h-6 w-6 text-gray-700 hover:fill-black" />
            </button>
          </li>
          <li>
            <button>
              <HiOutlineUser className="h-6 w-6 text-gray-700 hover:fill-black" />
            </button>
          </li>
          <li>
            <button>
              <HiOutlineShoppingCart className="h-6 w-6 text-gray-700 hover:fill-black" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
