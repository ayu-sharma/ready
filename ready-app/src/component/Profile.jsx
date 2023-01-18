import React from 'react'
import Navbarlogoutbuy from './Navbarlogoutbuy'
import prof from './Photos/profile.png'

function Profile() {
  return (
    <div className='min-h-screen'>
        <Navbarlogoutbuy/>
        <h1 className='text-white mx-20 text-2xl'>User Profile</h1>
        <div className='mt-14 mx-auto md:flex justify-center'>
            <img className='w-[12.5rem] h-[12.5rem] hover:opacity-80 mx-auto mb-4' src={prof} alt="" />
            <div className='bg-white p-8 w-8/12 rounded-lg drop-shadow mx-auto mb-24'>
                <div className='flex'>
                    <p className='font-semibold text-lg md:text-xl text-[#8f0fff] mx-auto md:mx-2'>John Doe</p>
                </div>
                <div className='flex mt-6 mb-2 py-1'>
                    <p className='font-medium md:text-lg mx-2'>Phone</p>
                    <p className='font-medium md:text-lg text-[#8f0fff] mx-5'>+91 98765 43210</p>
                </div>
                <div className='flex my-2 py-1'>
                    <p className='font-medium md:text-lg mx-2'>Email</p>
                    <p className='font-medium md:text-lg text-[#8f0fff] mx-5'>johndoe@email.com</p>
                </div>
                <div className='flex my-2 py-1'>
                    <p className='font-medium md:text-lg mx-2'>Address</p>
                    <p className='font-medium md:text-lg text-[#8f0fff] mx-5'>Flat A, Apartment B, Area C, City D - 100001</p>
                </div>
                <div className='flex my-2 py-1'>
                    <p className='font-medium md:text-lg mx-2'>Birthday</p>
                    <p className='font-medium md:text-lg text-[#8f0fff] mx-5'>29 February 1997</p>
                </div>
                <div className='flex my-2 py-1'>
                    <p className='font-medium md:text-lg mx-2'>Gender</p>
                    <p className='font-medium md:text-lg text-[#8f0fff] mx-5'>Male</p>
                </div>
                <button className='flex font-semibold drop-shadow-md text-white md:text-center mx-auto bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ease-in-out transition duration-200 py-2 md:px-10 rounded-full mt-7 p-8 cursor-pointer'>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default Profile