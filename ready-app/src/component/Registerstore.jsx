import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogoutsell from './Navbarlogoutsell'

function Registerstore() {
  return (
    <>
    <Navbarlogoutsell/>
        <h1 className='text-white mx-20 text-2xl'>Register your store</h1>
    <div className='drop-shadow-2xl mb-44 bg-white md:mx-20 py-8 mt-10 mx-10 mb-14 rounded-xl grid grid md:grid-cols-2'> 
        <form className='md:flex md:flex-col'>
    <label className='flex flex-col px-2 mx-5'>
        <div className='flex flex-col'>
        <div className='grid grid-row'>
            <h4 className=''>Store Name</h4>
            <input className='my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='grid grid-row'>
            <h4 className=''>Owner Name</h4>
            <input className='my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='grid grid-row'>
            <h4 className=''>GSTIN</h4>
            <input className='my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='grid grid-row'>
            <h4 className=''>Address Line 1</h4>
            <input className='my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='grid grid-row'>
            <h4 className=''>Address Line 2</h4>
            <input className='my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full'  type="text" name="store_name" />
        </div>
        <div className='grid grid-row'>
            <h4 className=''>Category</h4>
            <input className=' my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full'  type="text" name="store_name" />
        </div>
        </div>
    <div>
    </div>
    </label>
        <Link to='/store-dashboard'><button className='align-center bg-[#8F00FF] text-white rounded-full px-12 py-2  hover:bg-[#661D9F] my-4 mx-4' type="submit">REGISTER NOW</button></Link>
    </form>
    <form className='grid-row-end'>
                    <div id="add-photos" className=''>
                        <div className=''>
                        <label for="photos"><img src="images/icons8-add-image-100(1).png" class="pict"/></label>
                        <h1 className="add">Add Photo</h1>
                        <input type="file" id="photos" name="photos"/>
                        </div>
                    </div>
                </form>
    
    </div>
    </>
  )
}
export default Registerstore