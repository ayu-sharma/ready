import React from 'react'

function Registerstore() {
  return (
    <div> 
        <h1 className='text-white mx-20 text-2xl'>Register your store</h1>
        <form className='drop-shadow-2xl md:flex md:flex-col bg-white rounded-xl md:mx-20 mt-14 mb-14'>
    <label className='flex flex-col mx-5 items-center'>
        <div className='flex flex-col w-full'>
        <div className='flex items-center'>
            <h4 className=''>Store Name</h4>
            <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='flex items-center'>
            <h4 className=''>Owner Name</h4>
            <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='flex items-center'>
            <h4 className='mr-5'>GSTIN</h4>
            <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='flex items-center'>
            <h4 className='mr-5'>Address Line 1</h4>
            <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='flex items-center'>
            <h4 className='mr-5'>Address Line 2</h4>
            <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='flex items-center'>
            <h4 className='mr-5'>Category</h4>
            <input className='my-5 px-2 py-1 bg-[#D9D9D9] text-black border-black border-solid border rounded text-l w-full'  type="text" name="store_name" />
        </div>
        </div>
    <div>
        <button className='align-center bg-[#8F00FF] text-white rounded-full px-12 py-2  hover:bg-[#661D9F] my-4 mx-4' type="submit">REGISTER NOW</button>
    </div>
    </label>
    </form>
    </div>
  )
}
export default Registerstore