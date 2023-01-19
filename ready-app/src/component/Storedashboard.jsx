import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../component/Photos/Ellipse 3.png';
import Navbarlogoutsell from './Navbarlogoutsell';

function Storedashboard() {
  return (
    <>
    <Navbarlogoutsell/>
    <div className='min-h-screen'>
            <h1 className='text-white mx-20 my-5 text-2xl'>Store Dashboard</h1>
        <div className='container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex flex-col  justify-center border-2 border-slate-200'>
            <div className='md:flow-root md:mr-10 mt-4 mx-auto md:w-[9.5rem]'>
                <div className='md:float-right md:absolute'>
                    <img className='w-11/12' src={img3} alt="cant show"/>
                </div>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Store Name</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>That Shop</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Owner Name</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>John Doe</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>GSTIN</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>12456711111111</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Category</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>These Goods</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Address Line 1</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>Shop No.1, Street A</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Address Line 2</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>Area B, City C, Pincode-111001</p>
            </div>
            <div className='flex mx-10 py-4'>
                <p className='mr-4 font-medium'>Listed Products</p>
                <p className='ml-4 text-[#8f0fff] font-medium'>3</p>
            </div>
            <div className='md:flow-root md:mr-10 mb-2 mx-auto'>
                <Link to='/payment-info'><button className='drop-shadow-xl align-center font-semibold md:float-right bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full px-12 py-2 hover:bg-gradient-to-br my-4 mx-4' type="submit">Edit</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Storedashboard