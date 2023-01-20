import React from 'react'
import Navbarlogoutbuy from './Navbarlogoutbuy'
import imgmain from './Photos/tshirtbg1.png'
import dil from "./Photos/images/Rectangle 14.png";

function Product() {
  return (
    <div className='min-h-screen'>
      <Navbarlogoutbuy/>
      <div className='bg-purple-50 w-11/12 rounded-xl mx-auto px-10 py-3 mb-4'>
        <div className='md:flex flex-col'>
          <div className='md:flex md:justify-between my-3'>
            <p className='font-semibold text-lg'>Showing</p>
            <p className='font-medium text-lg text-[#8f0fff]'>Product 1</p>
            <p className='text-lg'>Price <b>Rs.1500</b></p>
            <p className='font-medium text-lg text-[#8f0fff]'>Delivery in 20min</p>            
            <p className='font-medium text-lg'>⭐⭐⭐⭐⭐ (1423)</p>
          </div>
          <div className='flow-root my-3'>
            <p className='font-semibold text-[#8f0fff] float-left cursor-pointer'>BACK</p>
            <div className='flex float-right space-x-12'>
              <p className='font-semibold text-[#8f0fff] cursor-pointer'>BUY</p>
              <p className='font-semibold text-[#8f0fff] cursor-pointer'>ADD TO CART</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <img className='' src={imgmain} alt="" />
        </div>
        <div className='flex flex-col'>
          <div className='text-white'></div>
          <div className='text-white'></div>
        </div>
      </div>
      
    </div>
  )
}

export default Product