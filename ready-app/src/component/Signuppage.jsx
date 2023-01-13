import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogin from './Navbarlogin'
 
function Buysignup(props) {
  return (
    <div>
      <Navbarlogin/>
    <div className='grid grid-flow-col items-center  md:grid-cols-2 justify-center mb-48'>
      <div>
         <h1 className="hidden md:text-white md:grid md:mx-12  md:text-2xl">{props.cta}</h1>
      </div>  
    <form className='drop-shadow-2xl md:flex md:flex-col md:justify-center md:items-center bg-white rounded-xl md:mx-20 px-18 mt-14 md:w-3/4'>
  <label className='flex flex-col justify-center items-center'>
  <h3 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Sign Up</h3>
  <h4 className='md:hidden px-6 font-light'>{props.cta}</h4>
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="text" name="name" placeholder='Email' />
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="password" placeholder="Password"></input>
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="password" placeholder="Confirm Password"></input>
  <Link to={props.button}><button className='bg-[#8F00FF] text-white rounded-full px-12 py-2  hover:bg-[#661D9F] mt-4' type="submit">SIGN UP</button></Link>
  <h6 className='font-normal text-sm pb-9 pt-2'>Already a member? <Link className='text-blue-600' to={props.link}>Log In</Link></h6>
  </label>
</form>
    </div>
    </div>
  )
}

export default Buysignup