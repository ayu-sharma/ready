import React from 'react'

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
          <a href="" class=" text-white block py-2 pl-3 pr-4  md:p-0 text-lg">Home</a>
        </li>
        <li>
          <a href="/Sellwithus" class=" block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0  md:p-0  text-white text-lg">Sell With Ready</a>
        </li>
        <li>
          <a href="Gotomarketplace" class="block py-2 pl-3 pr-4  text-white md:hover:bg-transparent md:border-0 md:p-0 text-lg">Go To Marketplace</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4  text-white md:hover:bg-transparent md:p-0 text-lg">About Us</a>
        </li>
      </ul>
    </div>
          </nav>
          <div>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="white"/>
</svg>

     </div>
        </div>
    

  )
}

export default Mainnavbar