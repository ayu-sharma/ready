import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Searchbar from "./Searchbar";

function Navbarlogoutbuy() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown(current => !current);
    // setIsShown(true);
  };
  return (
    <>
    <div className="flex items-center justify-between p-5">
      <nav className=" px-2 sm:px-4 py-2.5 rounded ">
        <div className="hamburger md:hidden cursor-pointer">
          <svg
            width="30"
            height="24"
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="28"
              y2="2"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="2"
              y1="12"
              x2="28"
              y2="12"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="2"
              y1="22"
              x2="28"
              y2="22"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/home"
                className=" text-white block py-2 px-4 md:py-0 md:px-1 md text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="block py-2 px-4  text-white md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 px-4 text-white md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-4  text-white md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="block py-2 px-4 animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-purple-700 md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Link to="/">
          <p className="font-semibold drop-shadow-md  text-white md:text-center md:mx-20 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br transition duration-200 py-2 md:px-10 rounded-full mt-1 p-8 cursor-pointer">
            Logout
          </p>
        </Link>
      </div>
    </div>
        
    </>
  );
}

export default Navbarlogoutbuy;
