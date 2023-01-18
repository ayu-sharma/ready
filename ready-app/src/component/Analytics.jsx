import React from 'react'
import Navbarlogoutsell from './Navbarlogoutsell'
import gra from './Photos/testgraph.webp'

function Analytics(props) {
  return (
    <div className='min-h-screen'>
      <Navbarlogoutsell/>
      <div>
        <h1 className='text-white ml-20 my-5 text-2xl'>Analytics</h1>
          <div className='bg-white drop-shadow mx-auto mt-14 mb-24 align-center w-10/12 rounded-lg border-2 border-slate-200 md:py-10 py-5'>
            <div className='md:flex md:justify-around'>
              <div className='flex'>
                <p className='font-medium text-lg mx-2'>Total Profit</p>
                <p className='font-medium text-lg text-[#8f0fff] mx-5'>Rs. 1,00,000</p>
              </div>
              <div className='flex'>
                <p className='font-medium text-lg mx-2'>Total Sales</p>
                <p className='font-medium text-lg text-[#8f0fff] mx-5'>100 units</p>
              </div>
              <div className='flex'>
                <p className='font-medium text-lg mx-2'>Total Views</p>
                <p className='font-medium text-lg text-[#8f0fff] mx-5'>1000</p>
              </div>
            </div>
            <img className='md:w-6/12 w-10/12 mx-auto py-5' src={gra} alt="" />
            <div className='flex justify-around'>
              <p className='text-[#8f0fff] underline cursor-pointer'>This week</p>
              <p className='text-[#8f0fff] underline cursor-pointer'>This month</p>
              <p className='text-[#8f0fff] underline cursor-pointer'>Last 6 months</p>
              <p className='text-[#8f0fff] underline cursor-pointer'>This year</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Analytics