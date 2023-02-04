import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbarlogoutbuy from './Navbarlogoutbuy'
import List from './List';

function Location() {
  const [visible, setVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
    <Navbarlogoutbuy/>
    <div className='min-h-screen items-center mx-auto md:flex md:flex-col md:mx-20 mt-14 mb-14'>
        <div className='drop-shadow-2xl flex flex-col bg-white items-center justify-center rounded-xl mx-10 px-18 pb-8 mt-14 md:w-7/12'>
            <h1 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Enter your city/town</h1>
            <input type="text" className='mt-5 mb-3 px-2 py-2 shadow-inner bg-[#D9D9D9] text-black rounded-lg text-l w-8/12' placeholder='Location' onChange={inputHandler} onClick={() => setVisible(!visible)}/>
            <div className='bg-[#D9D9D9] shadow-lg rounded-md w-8/12 p-3 h-[10rem] overflow-hidden overflow-y-auto' style={{display: visible ? 'block' : 'none'}}><List input={inputText}/></div>
            <Link to="/home" className="button text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200">Enter</Link>
        </div>
    </div>
    </>
  )
}

export default Location