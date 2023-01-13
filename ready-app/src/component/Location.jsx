import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogoutbuy from './Navbarlogoutbuy'

function Location() {
  return (
    <>
    <Navbarlogoutbuy/>
    <div className='min-h-screen items-center mx-auto md:block md:flex md:flex-col md:mx-20 mt-14 mb-14'>
        <div className='drop-shadow-2xl flex flex-col bg-white items-center justify-center rounded-xl mx-10 px-18 pb-8 mt-14 md:w-7/12'>
            <h1 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Enter your city/town</h1>
            <input type="text" className='my-5 px-2 py-2 shadow-inner bg-[#D9D9D9] text-black rounded-lg text-l w-8/12' placeholder='Location'/>
            <Link to="/home" className="button bg-[#8F00FF] text-white rounded-full px-12 py-2  hover:bg-[#661D9F] mt-4">ENTER</Link>
        </div>
    </div>
    </>
  )
}

export default Location