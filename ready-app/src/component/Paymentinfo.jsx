import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../component/Ellipse 3.png'

function Paymentinfo() {
  return (
    <div className='min-h-screen'>
            <h1 className='text-white mx-20 my-5 text-2xl'>Payment Information</h1>
        <div className='container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex md:block flex-col  justify-center border-2 border-slate-200'>
            <div className='md:flow-root md:mr-10 mt-4 mx-auto md:w-[9.5rem]'>
                <div className='md:float-right md:absolute'>
                    <img className='w-11/12' src={img3} alt="cant show"/>
                </div>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Account No.</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>216210000000XXXXX</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Account Holder Name</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>John Doe</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>GSTIN</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>12456711111111</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>UPI ID</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>9876543210@upiname</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Wallet Balance</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>Rs. 15,000</p>
            </div>
            <div className='md:flow-root md:mr-10 mb-2 mx-auto'>
                <Link to='/payment-info'><button className='drop-shadow-xl align-center md:float-right bg-[#8F00FF] text-white rounded-full px-12 py-2 hover:bg-[#661D9F] my-4 mx-4' type="submit">ADD MONEY</button></Link>
                <Link to='/payment-info'><button className='drop-shadow-xl align-center md:float-right bg-[#8F00FF] text-white rounded-full px-12 py-2 hover:bg-[#661D9F] my-4 mx-4' type="submit">EDIT</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Paymentinfo