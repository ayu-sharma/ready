import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogin from './Navbarlogin' 
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, error} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    

    await login(email, password)
  }

  const emailInput=(e)=>{
      setEmail(e.target.value)
  }

  const passwordInput=(e)=>{
    setPassword(e.target.value)
}
  return (
    <div>
      <Navbarlogin/>
    <div className='grid grid-flow-col items-center  md:grid-cols-2 justify-center mb-48'>
    <div>
       <h1 className="hidden md:text-white md:grid md:mx-12  md:text-2xl">{props.cta}</h1>
    </div>         
  <form className='LOGIN drop-shadow-2xl md:flex md:flex-col md:justify-center md:items-center bg-white rounded-xl md:mx-20 px-18 mt-14 md:w-3/4' onSubmit={handleSubmit}>
<label className='flex flex-col justify-center items-center'>
<h3 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Sign In</h3>
<h4 className='md:hidden px-6 font-light'>{props.cta}</h4>
  <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l' size={25} type="text" name="email" id='user-email' placeholder='Email' value={email} onChange={emailInput}/>
  <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l' size={25} type="password" id='user-password' placeholder="Password" value={password} onChange={passwordInput}></input>
  <Link to={props.button} className='text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200' type="submit" disabled={!email||!password}>Sign In</Link>
  {error && <div className='error'>{error}</div>}
<h6 className='font-normal text-sm pb-9 pt-2'>Not registered yet? <a className='text-blue-600' href={props.link}>Sign Up</a></h6>
</label>
</form>
  </div>
  </div>
  )
}

export default Login