import React from 'react'
import Navbarlogoutbuy from './Navbarlogoutbuy'
import imgmain from './Photos/tshirtbg1.png'
import imgsub2 from './Photos/prodimg2.jpeg'
import imgsub3 from './Photos/prodimg3.webp'
import imgsub4 from './Photos/prodimg4.jpeg'
import imgsub5 from './Photos/prodimg5.webp'
import imgsub6 from './Photos/prodimg6.webp'
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
      <div className='md:flex mb-14 mx-auto'>
        <div className='bg-white py-5 px-5 rounded-xl md:ml-14 md:mr-7 mx-5 mb-4'>
          <img className='flex rounded mx-auto' src={imgmain} alt=""/>
          <div className='flex justify-around mb-2 mt-4'>
            <img className='h-[4rem] border-2 border-purple-500 rounded cursor-pointer hover:opacity-90' src={imgmain} alt="" />
            <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub2} alt="" />
            <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub3} alt="" />
            <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub4} alt="" />
            <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub5} alt="" />
            <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub6} alt="" />
          </div>
        </div>
        <div className='mx-5 md:mr-14 md:ml-7 md:w-6/12'>
          <div className='bg-white p-5 mx-auto rounded-xl mb-4'>
            <div className='flex justify-between'>
              <h1 className='text-[#8f0fff] font-semibold text-xl'>PRODUCT 1</h1>
              <h1 className='font-medium text-xl'>Rs.1500</h1>
            </div>
            <div className='my-2'>
              <p className='font-medium'>Variant 1</p>
              <div className='flex'>
                <p className='font-light mr-1'>Sold by :</p>
                <p className='font-medium text-[#8f0fff] ml-1 cursor-pointer hover:underline'>This Shop - Area A</p>
              </div>
            </div>
            <div className='my-4'>
              <h1 className='font-semibold'>Description</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam atque pariatur nemo ipsum qui labore sit nostrum, commodi eligendi distinctio!</p>
            </div>
            <div className='bg-purple-100 p-5 rounded-xl cursor-pointer hover:opacity-80'>
              <div className='flex justify-between'>
                <h1 className='font-medium text-[#8f0fff]'>Customer Reviews</h1>
                <p>⭐⭐⭐⭐⭐ (1423)</p>
              </div>
              <h1 className='flex justify-end mt-4 text-[#8f0fff] font-semibold'>READ ALL</h1>
            </div>
          </div>
          <div className='bg-white p-3 rounded-xl'>
            <p className='font-semibold my-2 mx-3 text-lg'>Variants</p>
            <div className='flex justify-around my-2'>
              <img className='h-[4rem] border-2 border-purple-500 rounded cursor-pointer hover:opacity-90' src={imgmain} alt="" />
              <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub2} alt="" />
              <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub3} alt="" />
              <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub4} alt="" />
              <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub5} alt="" />
              <img className='h-[4rem] rounded cursor-pointer hover:opacity-80' src={imgsub6} alt="" />
            </div>
          </div>
          <div className='flex justify-around md:my-12 my-4'>
            <button className='text-white w-5/12 rounded-xl py-4 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200'>BUY</button>
            <button className='text-white w-6/12 rounded-xl py-4 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200'>ADD TO CART</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Product