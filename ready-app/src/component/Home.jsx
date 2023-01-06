import React from 'react'

function Home() {
  return (
   <div> 
    <h1 className='text-white text-center text-9xl mt-20'>R</h1>
    <p className='text-white text-center text-lg my-10 tracking-widest'>Just what you need</p>

    <div className="sellbtn flex justify-center flex-col md:flex-row items-center sm:my-5">
      <p className='text-white md:text-center md:mx-24 bg-[#8f0fff] hover:bg-[#661D9F] py-2 md:px-10 rounded-full mt-5 p-8 cursor-pointer'>SELL</p>
      <p className='text-white md:text-center md:mx-24 bg-[#8f0fff] hover:bg-[#661D9F] py-2 md:px-10 rounded-full mt-5 p-8 cursor-pointer'>BUY</p>
    </div>

    </div>
  )
}

export default Home