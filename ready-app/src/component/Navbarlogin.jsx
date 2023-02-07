import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Mainnavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {logout} = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <div className="flex items-center justify-between p-5">
      <nav>
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
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="12"
              x2="28"
              y2="12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="22"
              x2="28"
              y2="22"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
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
                <Link to="/">Home</Link>
              </li>
              <li className="my-5 text-lg font-medium border-b-2 border-purple-400">
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="DESKTOP-MENU w-full md:block" id="navbar-default">
          <ul className="hidden p-2 mt-2 space-x-8 lg:flex md:font-medium">
            <li>
              <Link
                to="/"
                className=" text-white block py-2 pl-3 pr-4 md:p-0 text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:p-0 text-lg"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
      <div>
        <p
          // to="/buyer-login"
          onClick={handleClick}
          className="font-semibold drop-shadow-md  text-white md:text-center right-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br transition duration-200 py-2 md:px-10 rounded-full mt-4 p-8 cursor-pointer"
        >
          Login
        </p>
      </div>
    </div>
  );
}

export default Mainnavbar;
