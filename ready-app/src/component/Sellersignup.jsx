import React from 'react'
 
function Buysignup() {
  return (
    <div className='grid grid-flow-col items-center  md:grid-cols-2 justify-center'>
      <div>
         <h1 className="hidden md:text-white md:grid md:mx-12  md:text-2xl">You are one step closer to setting up your online store! <br/>Sign up and get started.</h1>
      </div>  
    <form className='md:flex md:flex-col md:justify-center md:items-center bg-white rounded-xl md:mx-20 px-18 mt-12'>
  <label className='flex flex-col justify-center items-center'>
  <h3 className='text-black mb-4 mt-5 text-xl font-medium'>Sign Up</h3>
  <h4 className='md:hidden px-6 font-light'>You are one step closer to setting up your online store! <br/>Sign up and get started.</h4>
    <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l' size={25} type="text" name="name" placeholder='Email' />
    <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l' size={25} type="password" placeholder="Password"></input>
  <button className='bg-[#8F00FF] text-white rounded-full px-12 py-2  hover:bg-[#661D9F] mt-4 mb-8' type="submit">SIGN UP</button>
  </label>
</form>
    </div>
  )
}

export default Buysignup