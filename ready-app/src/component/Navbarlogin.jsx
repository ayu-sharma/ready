import React from 'react'
import {Link} from 'react-router-dom'


function Mainnavbar() {
  return ( 
    <div className='flex items-center justify-between p-5'>
        
       <nav class=" px-2 sm:px-4 py-2.5 rounded ">
        <div className='hamburger md:hidden cursor-pointer'>
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="2" x2="28" y2="2" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <line x1="2" y1="12" x2="28" y2="12" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <line x1="2" y1="22" x2="28" y2="22" stroke="white" stroke-width="4" stroke-linecap="round"/>
        </svg>
        </div>

         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Link to="/" class=" text-white block py-2 pl-3 pr-4  md:p-0 text-lg">Home</Link>
        </li>
        <li>
          <Link to="/about" class="block py-2 pl-3 pr-4  text-white md:hover:bg-transparent md:p-0 text-lg">About Us</Link>
        </li>
      </ul>
    </div>
          </nav>
          <div>
          {/* <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="white"/>
</svg> */}
          <p className='font-semibold drop-shadow-md text-white md:text-center md:mx-20 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br transition duration-200 py-2 md:px-10 rounded-full mt-1 p-8 cursor-pointer'>Login</p>

     </div>
        </div>
    

  )
}

export default Mainnavbar