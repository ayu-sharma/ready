import React from 'react'
import { Link } from 'react-router-dom'
import img5 from '../component/Photos/Ellipse 4.png'
import Navbarlogoutbuy from './Navbarlogoutbuy'

function Checkout() {
  return (
    <>
    <Navbarlogoutbuy/>
    <div className='min-h-screen'>
    <h1 className='text-white mx-20 my-5 text-2xl'>Checkout</h1>
<div className='container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex flex-col  justify-center border-2 border-slate-200'>
    <div className='md:flow-root md:mr-10 mt-4 mx-auto md:w-[9.5rem]'>
        <div className='md:float-right md:absolute'>
            <img className='w-11/12' src={img5} alt="cant show"/>
        </div>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 font-medium'>Item</p>
        <p className='ml-4 text-[#8f0fff] font-medium'>Product 1</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 font-medium'>Name</p>
        <p className='ml-4 text-[#8f0fff] font-medium'>John Doe</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 font-medium'>Delivery Address</p>
        <div className=''>
        <input className='ml-4 text-[#8f0fff] font-medium bg-slate-400 rounded md:w-7/12'></input>
        <p>Billing address same as delivery address</p>
        </div>
    </div>
    <div className='flex justify-between items-center'>
    <div className='flex flex-col'>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 font-medium'>Price</p>
        <p className='ml-4 text-[#8f0fff] font-medium'>Rs. 1500</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 font-medium'>Delivery Fee</p>
        <p className='ml-4 text-[#8f0fff] font-medium'>Rs. 100</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 font-medium'>TOTAL</p>
        <p className='ml-4 text-[#8f0fff] font-medium'>Rs. 1600</p>
    </div>
</div>
</div>
    <div className='md:flow-root md:mr-10 mb-2 mx-auto'>
        
        <Link to=''><button className='drop-shadow-xl align-center md:float-right bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-white rounded-full px-12 py-2 my-4 mx-4 font-semibold' type="submit">PROCEED TO PAY</button></Link>
    </div>
</div>
</div>
</>
  )
}

export default Checkout