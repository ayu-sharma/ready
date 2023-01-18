import React from 'react'
import Navbarlogoutbuy from './Navbarlogoutbuy'
import { Link } from 'react-router-dom'
import wish from './Photos/emptywishlist.png'

function Wishlist() {
  return (
    <div className='min-h-screen'>
        <Navbarlogoutbuy/>
        <h1 className='text-white mx-20 text-2xl'>Your Wishlist</h1>
        <div className='bg-white p-8 mx-auto mt-14 mb-24 justify-center w-10/12 rounded-lg'>
          <div className='flex flex-col justify-center mx-auto items-center'>
            <img className='md:w-5/12 py-14' src={wish} alt="" />
            <p className='text-gray-500 font-medium'>Your wishlist is currently empty</p>
            <Link to='/home'><button className='font-semibold drop-shadow-md text-white md:text-center md:mx-24 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ease-in-out transition duration-200 py-2 md:px-10 rounded-full mt-5 p-8 cursor-pointer'>Browse</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Wishlist