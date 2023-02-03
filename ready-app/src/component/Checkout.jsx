import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import img5 from '../component/Photos/Ellipse 4.png'
import Navbarlogoutbuy from './Navbarlogoutbuy'

function Checkout() {

    const [input, setInput] = useState({
        checkoutaddress:""
    });
    let name, value;
    const changeaddress = (e) => {
      console.log(e)
      name = e.target.name
      value = e.target.value
      
      setInput({...input, [name]:value})
    }
    
  return (
    <>
    <Navbarlogoutbuy/>
    <div className='min-h-screen'>
    <h1 className='text-white mx-20 my-5 text-2xl'>Checkout</h1>
<div className='container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex flex-col  justify-center border-2 border-slate-200'>
    <div className='md:flow-root md:mr-10 mt-4 mx-auto md:w-[9.5rem]'>
        <div className='md:float-right md:absolute'>
            <img className='w-11/12' src={img5} alt="cant show"/>
        </div>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 text-lg font-semibold'>Item</p>
        <p className='ml-4 text-[#8f0fff] text-lg font-medium'>Product 1</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 text-lg font-semibold'>Name</p>
        <p className='ml-4 text-[#8f0fff] text-lg font-medium'>John Doe</p>
    </div>
    <div className='w-10/12 mx-10 py-4'>
        <div className='flex md:justify-between w-full'>
            <p className='mr-4 text-lg font-semibold'>Delivery Address</p>
            <input className='bg-gray-200 w-10/12 rounded-lg shadow-inner px-3 text-lg' type="text" name="checkoutaddress" value={input.checkoutaddress} onChange={changeaddress} />
        </div>
        <div className='flex justify-end my-2'>
            <input className='mx-1' type="radio" />
            <p className='mx-1'>Billing address same as delivery address</p>
        </div>
    </div>
    <div className='flex justify-between items-center'>
    <div className='flex flex-col'>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 text-lg font-semibold'>Price</p>
        <p className='ml-4 text-[#8f0fff] text-lg font-medium'>Rs. 1500</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 text-lg font-semibold'>Delivery Fee</p>
        <p className='ml-4 text-[#8f0fff] text-lg font-medium'>Rs. 100</p>
    </div>
    <div className='flex mx-10 py-4'>
        <p className='mr-4 text-lg font-semibold'>TOTAL</p>
        <p className='ml-4 text-[#8f0fff] text-lg font-medium'>Rs. 1600</p>
    </div>
</div>
</div>
    <div className='md:flow-root md:mr-10 mb-2 mx-auto'>
        
        <Link to='/orderplaced'><button className='drop-shadow-xl align-center md:float-right bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-white rounded-full px-12 py-2 my-4 mx-4 font-semibold' type="submit">Proceed To Pay</button></Link>
    </div>
</div>
</div>
</>
  )
}

export default Checkout