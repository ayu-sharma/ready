import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Searchbar from "./Searchbar";

function Navbarlogoutbuy() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    <div className="flex items-center justify-between p-5">
      <nav className=" px-2 sm:px-4 py-2.5 rounded ">
      <section className="MOBILE-MENU flex lg:hidden cursor-pointer">
        <svg className="HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
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
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              x1="2"
              y1="12"
              x2="28"
              y2="12"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              x1="2"
              y1="22"
              x2="28"
              y2="22"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 left-0 px-5 py-5"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between text-white">
              <li className="my-5 text-lg font-medium border-b-2 border-purple-400">
                <Link to="/home">Home</Link>
              </li>
              <li className="my-5 text-lg font-medium border-b-2 border-purple-400">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="my-5 text-lg font-medium border-b-2 border-purple-400">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="my-5 text-lg font-medium border-b-2 border-purple-400">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="hidden lg:flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
                to='/stores'
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
          <p className="font-semibold drop-shadow-md  text-white md:text-center right-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br transition duration-200 py-2 md:px-10 rounded-full mt-1 p-8 cursor-pointer">
            Logout
          </p>
        </Link>
      </div>
    </div>
    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, #000000 50%, rgba(163, 46, 255) 100%);;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}

export default Navbarlogoutbuy;
