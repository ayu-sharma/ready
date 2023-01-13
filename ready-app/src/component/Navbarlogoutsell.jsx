import React from "react";
import { Link } from "react-router-dom";

function Navbarlogoutsell() {
  return (
    <div className="flex items-center justify-between p-5">
      <nav class=" px-2 sm:px-4 py-2.5 rounded ">
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

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/store-dashboard"
                class=" text-white block py-2 px-4 md:py-0 md:px-1 md text-lg"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                class="block py-2 px-4  text-white md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                class="block py-2 px-4 text-white md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/payment-info"
                class="block py-2 px-4  text-white md:hover:bg-transparent md:py-0 md:px-1 text-lg"
              >
                Payments
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <p className="font-semibold drop-shadow-md text-white md:text-center md:mx-20 bg-[#8f0fff] hover:bg-white hover:text-[#8f0fff] ease-in-out transition duration-200 py-2 md:px-10 rounded-full mt-1 p-8 cursor-pointer">
          Logout
        </p>
      </div>
    </div>
  );
}

export default Navbarlogoutsell;
