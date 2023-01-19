import React from 'react'
import img1 from '../component/Photos/aboutUsimg1.png'
import img2 from '../component/Photos/aboutUsimg2.png'
import Mainnavbar from './Navbarlogin'

function Aboutus() {
  return (
    <>
    <Mainnavbar/>
    <div className='container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex flex-col items-center justify-center border-2 border-slate-200'>
      <p className='mx-10 py-5 font-semibold text-xl'>About Us</p>
      <div className='mb-10 mx-10 md:float-left md:flex md:items-center'>
        <p className='md:w-6/12 text-lg md:mr-10'>Ready is an initiative to bring brick-and-mortar retail stores onto the internet and help them become a part of the e-commerce industry. We, at Ready, value time above everything else. Hence, it is our mission to provide fast services to both, our business partners and our customers.</p>
        <img className='md:w-4/12 md:float-right mx-auto my-5' src={img1} alt="cant show" />
      </div>
      <div className='mb-10 mx-10 md:float-right md:flex md:items-center'>
        <img className='md:w-4/12 md:float-left mx-auto my-5' src={img2} alt="cant show" />
        <p className='md:w-6/12 text-lg md:float-right my-10'>Rather than waiting for your product to be delivered many days later, we ensure that it is delivered the same day of placing your order. No more hassle of tracking your shipment. Sit back and order <b>just what you need</b>.</p>
      </div>
    </div>
    </>
  )
}

export default Aboutus