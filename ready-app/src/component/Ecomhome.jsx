import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogoutbuy from './Navbarlogoutbuy'
import imgcr5 from './Photos/imgCar5.png'
import puma from './Photos/images/Rectangle 21.png'
import croma from './Photos/images/Rectangle 22.png'
import thiss from './Photos/images/Rectangle 23.png'
import cross from './Photos/images/Rectangle 24.png'
import daily from './Photos/images/Rectangle 25.png'
import gross from './Photos/images/Rectangle 21 (1).png'
import appar from './Photos/images/Rectangle 22 (1).png'
import med from './Photos/images/Rectangle 23 (1).png'
import book from './Photos/images/Rectangle 24 (1).png'
import hard from './Photos/images/Rectangle 25 (1).png'
import nike from './Photos/prodimg4.jpeg'
import Searchbar from './Searchbar'
import data from './data'

function Ecomhome() {
   
  return (
    <div className='min-h-screen'>
        <Navbarlogoutbuy/>
        <Searchbar/>
        <div className='bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 h-[17.5rem]  drop-shadow w-11/12 flex justify-center align-center mx-auto rounded-lg mt-4'>
          <p className='m-auto px-8 text-white md:text-xl font-semibold'>Get FLAT 50% OFF on newest arrivals</p>
          <img className='w-9/12 rounded-r-lg' src={imgcr5} alt=""/>
        </div>
        <div className='bg-white w-11/12 mx-auto rounded-lg my-14'>
            <h1 className='font-semibold text-xl px-3 py-6 md:ml-5 md:mt-5 mx-auto'>Trending Products</h1>
            <div className="flex justify-around align-center py-4">
            {
              data.products.map(product => (
                  <Link to={product.slug} className="w-2/12 flex flex-col justify-center items-center">
                          <img className='hover:scale-105 ease-in-out transition duration-200 h-[10rem] rounded-md' src={product.image} alt={product.name} />
                          <p className="text-md">{product.name}</p>
                          <p className="font-semibold text-md">Rs.{product.price}</p>
                  </Link>
              ))
            }
            </div>
        </div>
        <div className='bg-white w-11/12 mx-auto rounded-lg my-14'>
            <h1 className='font-semibold text-xl px-3 py-6 md:ml-5 md:mt-5 mx-auto'>Popular Stores</h1>
            <div className="flex justify-around align-center py-4">
                    <div className="w-2/12 flex flex-col justify-center items-center">
                        <img className='hover:scale-105 ease-in-out transition duration-200' src={puma} alt="" />
                        <p className="text-sm md:text-lg">Puma</p>
                    </div>
                    <div  className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={croma} alt="" />
                      <p className="text-sm md:text-lg">Croma</p>
                    </div>
                    <div className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={thiss} alt="" />
                      <p className="text-sm md:text-lg">This Shop</p>
                    </div>
                    <div className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={cross} alt="" />
                      <p className="text-sm md:text-lg">Crossword</p>
                    </div>
                    <div className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={daily} alt="" />
                      <p className="text-sm md:text-lg">Daily needs</p>
                    </div>
                </div>
        </div>
        <div className='bg-white w-11/12 mx-auto rounded-lg mb-24 drop-shadow-md'>
            <h1 className='font-semibold text-xl px-3 py-6 md:ml-5 md:mt-5 mx-auto'>Popular Categories</h1>
            <div className="flex justify-around align-center py-4">
                    <div className="w-2/12 flex flex-col justify-center items-center">
                        <img className='hover:scale-105 ease-in-out transition duration-200' src={gross} alt="" />
                        <p className="text-sm md:text-lg">Grocery</p>
                    </div>
                    <Link to='/apparel-stores' className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={appar} alt="" />
                      <p className="text-sm md:text-lg">Apparel</p>
                    </Link>
                    <div className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={med} alt="" />
                      <p className="text-sm md:text-lg">Medicines</p>
                    </div>
                    <div className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={book} alt="" />
                      <p className="text-sm md:text-lg">Books</p>
                    </div>
                    <div className="w-2/12 flex flex-col justify-center items-center">
                      <img className='hover:scale-105 ease-in-out transition duration-200' src={hard} alt="" />
                      <p className="text-sm md:text-lg">Hardware</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Ecomhome