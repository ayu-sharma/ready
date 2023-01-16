import React from 'react'
import { Link } from 'react-router-dom'
import del from './Photos/delete.png'

function Listedproductrows(props) {
  return (
    <div className='bg-white rounded-lg p-4 flex align-center'>
        <img src={props.img} alt="img"/>
        <div className='mx-14 my-auto'>
            <h1>{props.product_name}</h1>
            <h1>Price <b>Rs. {props.price}</b></h1>
            <h1 className='mt-10 text-[#8f0fff] hover:underline cursor-pointer'>Customer Reviews</h1>
        </div>
        <div className='md:flow-root md:mr-10 mx-auto my-auto'>
                <Link to='/payment-info'><button className='drop-shadow-xl align-center md:float-right bg-[#8F00FF] text-white rounded-full px-12 py-2 hover:bg-[#661D9F] my-4 mx-4' type="submit">DELETE</button></Link>
                <Link to='/payment-info'><button className='drop-shadow-xl align-center md:float-right bg-[#8F00FF] text-white rounded-full px-12 py-2 hover:bg-[#661D9F] my-4 mx-4' type="submit">EDIT</button></Link>
        </div>
   </div>
  )
}

export default Listedproductrows