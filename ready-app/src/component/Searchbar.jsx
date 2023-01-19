import React from 'react'
import { Link } from 'react-router-dom'

function Searchbar() {
  return (
    <div className='min-h-screen m-5'>
        <Link to='/home'>
        <h1 className='text-white font-semibold drop-shadow-md px-2 sm:px-4 py-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-center rounded-full mt-10 p-8 cursor-pointer w-[7rem]'>Back</h1>
        </Link>
        <div className='bg-white px-8 py-4 mt-10 w-10/12 mx-auto flex rounded-full justify-around items-center'>
            <h1 className='font-medium text-lg py-2'>Search</h1>
            <input className='shadow-inner rounded-full w-8/12 px-4 py-2 bg-gray-200' type="text" name="" id="" />
        </div>
    </div>
  )
}

export default Searchbar