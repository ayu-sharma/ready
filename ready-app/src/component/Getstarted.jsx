import React from 'react'
import img from '../component/getStartedimg.png'
import { Link } from 'react-router-dom'

function Getstarted() {
  return (
    <div className='min-h-screen'>
        <h1 className='text-white mx-20 text-2xl my-14'>Why use READY?</h1>
        <div className='md:flex md:items-center my-14'>
            <p className='text-white mx-20 text-lg md:w-5/12 my-10'>With increasing usage of e-commerce websites, there is no reason why you shouldn't have an online store. But making your own website and drawing traffic to it is a lengthy process. Plus, it's expensive.</p>
            <img className='md:w-3/12 mx-auto w-6/12' src={img} alt="cant show" />
        </div>
        <p className='text-white mx-20 text-lg md:w-5/12 my-10'>That's where we come in.</p>
        <div className='flow-root items-center mx-auto'>
          <div className='text-white mx-20 md:w-6/12 my-14 flex items-center md:float-left'>
            <h1 className='md:text-5xl text-3xl font-semibold mr-5'>1</h1>
            <p className='text-xl'>With Ready, you can setup your own online store in a few steps without making a new website.</p>
          </div>
          <div className='text-white mx-20 md:w-6/12 my-14 flex items-center md:float-right'>
            <h1 className='md:text-5xl text-3xl font-semibold mr-5'>2</h1>
            <p className='text-xl'>We bring the traffic to your store.</p>
          </div>
          <div className='text-white mx-20 md:w-6/12 my-14 flex items-center md:float-left'>
            <h1 className='md:text-5xl text-3xl font-semibold mr-5'>3</h1>
            <p className='text-xl'>We deliver the products via trusted delivery partner.</p>
          </div>
        </div>
          <div className='md:flex text-white mx-20 my-24 md:items-center'>
            <div className='md:mr-40'>
              <h1 className='text-xl font-semibold mb-2'>All this, only at Rs.XX99</h1>
              <p className='text-lg mt-2'>Still unsure? Don't worry. Setup your store first, pay later.</p>
            </div>
            <Link to="/register-store"><button className='bg-[#8F00FF] text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow hover:bg-white hover:text-[#8f0fff] ease-in-out transition duration-200' type="submit">GET STARTED</button></Link>
          </div>
    </div>
  )
}


export default Getstarted