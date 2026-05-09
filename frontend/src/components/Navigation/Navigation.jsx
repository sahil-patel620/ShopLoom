import React from "react";
import {
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { Link, NavLink } from "react-router";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 lg:py-4">
      {/* Logo */}
      <Link className="flex items-center gap-2 text-xl sm:text-2xl lg:text-2xl font-bold" to="/">
        <img
          src="/shopLoom.svg"
          alt="ShopLoom Logo"
          className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
        />
        <span>ShopLoom</span>
      </Link>

      {/* Nav Links (hidden on mobile) */}
      <ul className="hidden lg:flex gap-8">
        <li className="text-gray-600 hover:text-red-500">
          <NavLink to="/" className={({isActive})=> isActive? 'active-link': ''}>Shop</NavLink>
        </li>
        <li className="text-gray-600 hover:text-red-500">
          <NavLink to="/men" className={({isActive})=> isActive? 'active-link': ''}>Men</NavLink>
        </li>
        <li className="text-gray-600 hover:text-red-500">
          <NavLink to="/women" className={({isActive})=> isActive? 'active-link': ''}>Women</NavLink>
        </li>
        <li className="text-gray-600 hover:text-red-500">
          <NavLink to="/kids" className={({isActive})=> isActive? 'active-link': ''}>Kids</NavLink>
        </li>
      </ul>

      {/* Search bar (hide on small screens) */}
      <div className="hidden sm:flex items-center bg-red-50 px-3 py-1 rounded-full">
        <HiOutlineSearch className="h-4 w-4 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-transparent outline-none text-sm"
        />
      </div>

      {/* Icons */}
      <ul className="flex items-center gap-4 sm:gap-6">
        <li>
          <HiOutlineHeart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700  hover:text-pink-500 hover:fill-pink-500" />
        </li>
        <li>
          <HiOutlineUser className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-blue-500 hover:fill-blue-500" />
        </li>
        <li>
          <Link to="/cart-items">
            <HiOutlineShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-green-500 hover:fill-green-500" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// import React, { useState } from "react";
// import {
//   HiOutlineSearch,
//   HiOutlineHeart,
//   HiOutlineUser,
//   HiOutlineShoppingCart,
//   HiOutlineMenu,
//   HiOutlineX,
// } from "react-icons/hi";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 lg:py-6">

//         {/* Left: Menu + Logo */}
//         <div className="flex items-center gap-4">
//           {/* Menu button (mobile only) */}
//           <button
//             className="lg:hidden"
//             onClick={() => setIsOpen(true)}
//           >
//             <HiOutlineMenu className="h-6 w-6 text-gray-800" />
//           </button>

//           <a className="text-xl sm:text-2xl lg:text-3xl font-bold" href="/">
//             ShopLoom
//           </a>
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden lg:flex gap-8">
//           <li className="text-gray-600 hover:text-red-500"><a href="/">Shop</a></li>
//           <li className="text-gray-600 hover:text-red-500"><a href="/mens">Men</a></li>
//           <li className="text-gray-600 hover:text-red-500"><a href="/womens">Women</a></li>
//           <li className="text-gray-600 hover:text-red-500"><a href="/kids">Kids</a></li>
//         </ul>

//         {/* Right side */}
//         <div className="flex items-center gap-4 sm:gap-6">

//           {/* Search (hide on small) */}
//           <div className="hidden sm:flex items-center bg-red-50 px-3 py-1 rounded-full">
//             <HiOutlineSearch className="h-4 w-4 text-gray-600" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="ml-2 bg-transparent outline-none text-sm"
//             />
//           </div>

//           {/* Icons */}
//           <HiOutlineHeart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
//           <HiOutlineUser className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
//           <HiOutlineShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
//         </div>
//       </nav>

//       {/* 🔥 Mobile Drawer */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* Close button */}
//         <div className="flex justify-end p-4">
//           <button onClick={() => setIsOpen(false)}>
//             <HiOutlineX className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Nav links */}
//         <ul className="flex flex-col gap-6 px-6">
//           <li><a href="/" onClick={() => setIsOpen(false)}>Shop</a></li>
//           <li><a href="/mens" onClick={() => setIsOpen(false)}>Men</a></li>
//           <li><a href="/womens" onClick={() => setIsOpen(false)}>Women</a></li>
//           <li><a href="/kids" onClick={() => setIsOpen(false)}>Kids</a></li>
//         </ul>
//       </div>

//       {/* Overlay (click outside to close) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Navigation;
