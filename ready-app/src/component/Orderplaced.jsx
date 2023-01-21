import React from 'react'
import { Link } from 'react-router-dom'
import img5 from '../component/Photos/Ellipse 4.png'
import Navbarlogoutbuy from './Navbarlogoutbuy'

function Orderplaced() {
  return (
    <>
    <Navbarlogoutbuy/>
    <div className='min-h-screen'>
    <h1 className='text-white mx-20 my-5 text-2xl'>Order Placed!</h1>
<div className='container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex flex-col  justify-center border-2 border-slate-200'>
    <div className='md:flow-root md:mr-10 mt-4 mx-auto md:w-[9.5rem]'>
        <div className='md:float-right md:absolute'>
            <img className='w-11/12' src={img5} alt="cant show"/>
        </div>
    </div>
    <div className='flex justify-between w-9/12'>
        <div className='flex mx-10 py-4'>
            <p className='mr-4 text-lg font-semibold'>Item</p>
            <p className='ml-4 text-[#8f0fff] text-lg font-medium'>Product 1</p>
        </div>
        <div className='flex mx-10 py-4'>
            <p className='mr-4 text-lg font-semibold'>Paid</p>
            <p className='ml-4 text-[#8f0fff] text-lg font-medium'>1600</p>
        </div>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 text-lg font-semibold'>Delivery In</p>
        <p className='ml-4 text-[#8f0fff] text-lg font-medium'>20 minutes</p>
    </div>
    <div className='w-10/12 mx-10 py-4'>
        <div className='flex md:justify-between w-full'>
            <p className='mr-4 text-lg font-semibold'>Delivery Address</p>
            <p className='bg-gray-200 w-10/12 rounded-lg shadow-inner px-4 py-4 text-lg'>This address - Street 21, Area C</p>
        </div>
    </div>
    <div className='font-medium mx-10 my-4 text-lg'>
        <p>Order received by This Shop - Area A </p>
        <p>Our delivery partner is on the way to deliver your shipment</p>
    </div>


    <div className='md:flow-root md:mr-10 mb-2 mx-auto'>
        
        <Link to='/continueshop'><button className='drop-shadow-xl align-center md:float-right bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-white rounded-full px-12 py-2 my-4 mx-4 font-semibold' type="submit">Continue Shopping</button></Link>
    </div>
</div>
</div>
</>
  )
}

export default Orderplaced