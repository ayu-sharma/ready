import React from 'react'
import { Link } from 'react-router-dom'

function Listedproductrows(props) {
  return (
    <div className='bg-white rounded-lg p-4 flex align-center w-11/12 border-2 border-slate-100 hover:bg-slate-100 my-1'>
        <div className='flex'>
          <img className='md:h-[10rem] h-[6rem] my-auto' src={props.img} alt="img"/>
          <div className='mx-6 md:mx-14 my-auto flex-col'>
              <h1>{props.product_name}</h1>
              <h1>Price <b>Rs. {props.price}</b></h1>
              <h1 className='mt-2 md:mt-10 text-[#8f0fff] hover:underline cursor-pointer'>Customer Reviews</h1>
          </div>
        </div>
        <div className='flow-root mx-auto my-auto items-center'>
          <div className='float-right relative ml-14'>
            <Link to='/payment-info'><button className='drop-shadow-xl align-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-white rounded-full px-9 py-2 my-2 mx-2 font-semibold' type="submit">Delete</button></Link>
            <Link to='/payment-info'><button className='drop-shadow-xl align-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-white rounded-full px-12 py-2 my-2 mx-2 font-semibold' type="submit">Edit</button></Link>
          </div>
        </div>
   </div>
  )
}

export default Listedproductrows