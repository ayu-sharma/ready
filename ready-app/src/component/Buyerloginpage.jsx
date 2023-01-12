import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
  return (
    <div className='grid grid-flow-col items-center  md:grid-cols-2 justify-center mb-48'>
    <div>
       <h1 className="hidden md:text-white md:grid md:mx-12  md:text-2xl">Sign in and continue your shopping.</h1>
    </div>  
  <form className='drop-shadow-2xl md:flex md:flex-col md:justify-center md:items-center bg-white rounded-xl md:mx-20 px-18 mt-14 md:w-3/4'>
<label className='flex flex-col justify-center items-center'>
<h3 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Sign In</h3>
<h4 className='md:hidden px-6 font-light'>Sign in and begin your new e-commerce experience.</h4>
  <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l' size={25} type="text" name="name" placeholder='Email' />
  <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l' size={25} type="password" placeholder="Password"></input>
  <Link to="/location"><button className='bg-[#8F00FF] text-white rounded-full px-12 py-2  hover:bg-[#661D9F] mt-4' type="submit">SIGN IN</button></Link>
<h6 className='font-normal text-sm pb-9 pt-2'>Not registered yet? <a className='text-blue-600' href="/buyer-signup">Sign Up</a></h6>
</label>
</form>
  </div>
  )
}

export default Loginpage