import React from 'react'
import img from '../component/getStartedimg.png'

function Getstarted() {
  return (
    <div className='min-h-screen'>
        <h1 className='text-white mx-20 text-2xl my-14'>Why use READY?</h1>
        <div className='md:flex md:items-center my-14'>
            <p className='text-white mx-20 text-lg md:w-5/12 my-10'>With increasing usage of e-commerce websites, there is no reason why you shouldn't have an online store. But making your own website and drawing traffic to it is a lenghty process. Plus, it's expensive.</p>
            <img className='md:w-3/12 mx-auto w-6/12' src={img} alt="cant show" />
        </div>
        <p className='text-white mx-20 text-lg md:w-5/12 my-10'>That's where we come in.</p>
    </div>
  )
}

export default Getstarted