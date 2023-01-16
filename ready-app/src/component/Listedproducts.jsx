import React from 'react'
import { Link } from 'react-router-dom'
import Listedproductrows from './Listedproductrows'
import Navbarlogoutsell from './Navbarlogoutsell'
import prod1 from './Photos/product1.png'
import prod2 from './Photos/product2.png'
import prod3 from './Photos/product3.png'

function Listedproducts() {
  return (
    <div className='min-h-screen'>
        <Navbarlogoutsell/>
    <div className='flex'>
        <h1 className='text-white ml-20 my-5 text-2xl'>Listed Products</h1>
        <p className='text-[#8f0fff] ml-10 my-5 text-2xl'>3</p>
    </div>
    <div className='drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12  rounded-lg flex flex-col justify-center border-2 border-slate-200'>
        <Listedproductrows img={prod1} product_name='Product 1' price='1500'/>
        <Listedproductrows img={prod2} product_name='Product 2' price='2500'/>
        <Listedproductrows img={prod3} product_name='Product 3' price='500'/>
    <div className='md:flow-root md:mr-10 mb-2 mx-auto'>
                <Link to='/payment-info'><button className='drop-shadow-xl align-center md:float-right bg-[#8F00FF] text-white rounded-full px-12 py-2 hover:bg-[#661D9F] my-4 mx-4' type="submit">ADD</button></Link>
    </div>
    </div>
    </div>
  )
}

export default Listedproducts