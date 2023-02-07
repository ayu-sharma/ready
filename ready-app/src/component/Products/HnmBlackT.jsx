import React from 'react'
import Navbarlogoutbuy from '../Navbarlogoutbuy'
import {Link} from 'react-router-dom'
import img1 from '../../component/Photos/prodimg4.jpeg'
import img2 from '../../component/Photos/nike-cap.webp'
import img3 from '../../component/Photos/puma-aero13.webp'
import img4 from '../../component/Photos/oneplus-z3.jpg'
import img5 from '../../component/Photos/iphone-13.jpg'
import img6 from '../../component/Photos/macbook-air-m2.jpeg'
import img7 from '../../component/Photos/airpods.jpg'
import img8 from '../../component/Photos/iphone-14.jpg'
import img9 from '../../component/Photos/macbook-pro.jpg'
import img10 from '../../component/Photos/airpods-max.jpeg'
import img11 from '../../component/Photos/hnm-sweat.jpeg'
import img12 from '../../component/Photos/hnm-shoes1.jpeg'
import img13 from '../../component/Photos/hnm-shirt.webp'
import img14 from '../../component/Photos/hnm-shoes2.webp'
import img15 from '../../component/Photos/nike-shoes1.webp'
import img16 from '../../component/Photos/nike-shoes2.webp'
import img17 from '../../component/Photos/nike-shoes3.webp'
import img18 from '../../component/Photos/oneplus-10.jpg'
import img19 from '../../component/Photos/oneplus-buds-pro.jpg'
import img20 from '../../component/Photos/oneplus-nord-ce.jpg'
import img21 from '../../component/Photos/puma-shoes2.webp'
import img22 from '../../component/Photos/puma-shoes-3.webp'
import img23 from '../../component/Photos/puma-track.webp'
const products = [
        //APPLE
        {
            name: 'Apple iPhone 13',
            slug: '/apple-iphone-13',
            category: 'Smartphones',
            image: img5,
            color: 'Black',
            price: 'Rs. 70999',
            countInStock: 12,
            brand: 'Croma',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 5,
            description: 'Smartphone with iOS',  
        },
        {
            name: 'Apple Macbook Air M2',
            slug: '/apple-macbook-air-m2',
            category: 'Laptops',
            image: img6,
            color: 'Midnight',
            price: 'Rs. 110999',
            countInStock: 10,
            brand: 'Apple',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 7,
            description: 'Laptop with new M2 chip',  
        },
        {
            name: 'Apple Airpods Pro',
            slug: '/apple-airpods-pro',
            category: 'Earphones',
            image: img7,
            color: 'White',
            price: 'Rs. 11999',
            countInStock: 10,
            brand: 'Apple',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Noise-cancelling earphones by Apple',  
        },
        {
            name: 'Apple iPhone 14 Pro',
            slug: '/apple-iphone-14-pro',
            category: 'Smartphones',
            image: img8,
            color: 'Gold',
            price: 'Rs. 120999',
            countInStock: 15,
            brand: 'Apple',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 2,
            description: 'New Smartphone with iOS and island notch',  
        },
        {
            name: 'Apple Macbook Pro M2',
            slug: '/apple-macbook-pro-m2',
            category: 'Laptops',
            image: img9,
            color: 'Space Gray',
            price: 'Rs. 210999',
            countInStock: 10,
            brand: 'Apple',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 4,
            description: 'Powerful Laptop with new M2 chip and large display',  
        },
        {
            name: 'Apple Airpods Max',
            slug: '/apple-airpods-max',
            category: 'Earphones',
            image: img10,
            color: 'Silver',
            price: 'Rs. 30999',
            countInStock: 8,
            brand: 'Apple',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 9,
            description: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range.',  
        },
        
        //H&M
        {
            name: 'H&M Black T-shirt',
            slug: '/hnm-black-tshirt',
            category: 'Shirt',
            image: img1,
            color: 'Black',
            price: 'Rs. 999',
            countInStock: 20,
            brand: 'H&M',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Black slim fit t-shirt for men',  
        },
        {
            name: 'H&M Black Sweatshirt',
            slug: '/hnm-black-sweatshirt',
            category: 'Shirt',
            image: img11,
            color: 'Black',
            price: 'Rs. 1099',
            countInStock: 20,
            brand: 'H&M',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Black relaxed fit sweatshirt for men',  
        },
        {
            name: 'H&M Sneakers',
            slug: '/hnm-black-sweatshirt',
            category: 'Shoes',
            image: img12,
            color: 'Beige',
            price: 'Rs. 1999',
            countInStock: 20,
            brand: 'H&M',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Sneakers for women',  
        },
        {
            name: 'H&M Shirt',
            slug: '/hnm-shirt',
            category: 'Shirt',
            image: img13,
            color: 'Red',
            price: 'Rs. 1199',
            countInStock: 20,
            brand: 'H&M',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Flannel shirt for men',  
        },
        {
            name: 'H&M Boots',
            slug: '/hnm-boots',
            category: 'Shoes',
            image: img14,
            color: 'White',
            price: 'Rs. 2199',
            countInStock: 20,
            brand: 'H&M',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Boots for men',  
        },

        //NIKE
        {
            name: 'Nike Black Cap',
            slug: '/nike-black-cap',
            category: 'Caps',
            image: img2,
            color: 'Black',
            price: 'Rs. 399',
            countInStock: 40,
            brand: 'Nike',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 15,
            description: 'Black baseball cap for men',  
        },
        {
            name: 'Nike Sneakers',
            slug: '/nike-sneakers',
            category: 'Shoes',
            image: img16,
            color: 'Grey',
            price: 'Rs. 4999',
            countInStock: 40,
            brand: 'Nike',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 15,
            description: 'Sneakers for all',  
        },
        {
            name: 'Nike Hightops',
            slug: '/nike-hightops',
            category: 'Shoes',
            image: img17,
            color: 'Red Swoosh',
            price: 'Rs. 7999',
            countInStock: 40,
            brand: 'Nike',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 15,
            description: 'Air jordans',  
        },
        {
            name: 'Nike Running Shoes',
            slug: '/nike-running-shoes',
            category: 'Shoes',
            image: img15,
            color: 'Black',
            price: 'Rs. 3999',
            countInStock: 40,
            brand: 'Nike',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 15,
            description: 'Running shoes',  
        },

        //ONEPLUS
        {
            name: 'Oneplus Buds Z3',
            slug: '/oneplus-buds-z3',
            category: 'Earphones',
            image: img4,
            color: 'Black',
            price: 'Rs. 4599',
            countInStock: 25,
            brand: 'Oneplus',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Noise-cancelling earbuds',  
        },
        {
            name: 'Oneplus 10',
            slug: '/oneplus-10',
            category: 'Smartphones',
            image: img18,
            color: 'Frost Green',
            price: 'Rs. 40999',
            countInStock: 20,
            brand: 'Oneplus',
            rating: '⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Superfast smartphone with Android 12',
        },
        {
            name: 'Oneplus Buds Pro',
            slug: '/oneplus-buds-pro',
            category: 'Earphones',
            image: img19,
            color: 'Black',
            price: 'Rs. 9999',
            countInStock: 20,
            brand: 'Oneplus',
            rating: '⭐⭐⭐⭐⭐',
            numReviews: 10,
            description: 'Premium Noise-cancelling earbuds',
        },
        {
            name: 'Oneplus Nord CE 2 Lite',
            slug: '/oneplus-nord-ce-2-lite',
            category: 'Smartphones',
            image: img20,
            color: 'Black',
            price: 'Rs. 18999',
            countInStock: 20,
            brand: 'Oneplus',
            rating: '⭐⭐⭐',
            numReviews: 10,
            description: 'Superfast smartphone with Android 12',
        },

        //PUMA
        {
            name: 'Puma Sneakers Aero 13s',
            slug: '/puma-aero-13s',
            category: 'Shoes',
            image: img3,
            color: 'Black',
            price: 'Rs. 2199',
            countInStock: 34,
            brand: 'Puma',
            rating: '⭐⭐⭐⭐',
            numReviews: 5,
            description: 'Unisex casual sneakers',  
        },
        {
            name: 'Puma Runners',
            slug: '/puma-runners',
            category: 'Shoes',
            image: img21,
            color: 'Orange',
            price: 'Rs. 3399',
            countInStock: 34,
            brand: 'Puma',
            rating: '⭐⭐⭐⭐',
            numReviews: 5,
            description: 'Unisex casual sneakers',  
        },
        {
            name: 'Puma Sports Shoes',
            slug: '/puma-sports-shoes',
            category: 'Shoes',
            image: img22,
            color: 'Black',
            price: 'Rs. 2599',
            countInStock: 34,
            brand: 'Puma',
            rating: '⭐⭐⭐⭐',
            numReviews: 5,
            description: 'Unisex casual sneakers',  
        },
        {
            name: 'Puma Track',
            slug: '/puma-track',
            category: 'Shirt',
            image: img23,
            color: 'Black',
            price: 'Rs. 2699',
            countInStock: 34,
            brand: 'Puma',
            rating: '⭐⭐⭐⭐',
            numReviews: 5,
            description: 'Track shirt',  
        },
    ]

function Product() {
  const filteredProduct = products.filter(items => {
    return items.name === 'H&M Black T-shirt'
  }) 
  return (
    <div className='min-h-screen'>
      <Navbarlogoutbuy/>
      {
        filteredProduct.map(product  => (
          <>
      <div className='bg-purple-50 w-11/12 rounded-xl mx-auto px-10 py-3 mb-4'>
        <div className='lg:flex flex-col'>
          <div className='lg:flex lg:justify-between my-3'>
            <p className='font-semibold text-lg'>Showing</p>
            <p className='font-medium text-lg text-[#8f0fff]'>{product.name}</p>
            <p className='text-lg'>Price <b>{product.price}</b></p>
            <p className='font-medium text-lg text-[#8f0fff]'>Delivery in 1 hr</p>            
            <p className='font-medium text-lg'>{product.rating} {product.numReviews}</p>
          </div>
          <div className='flow-root my-3'>
            <p className='font-semibold text-[#8f0fff] float-left cursor-pointer'>BACK</p>
            <div className='flex float-right space-x-12'>
              <p className='font-semibold text-[#8f0fff] cursor-pointer'>BUY</p>
              <p className='font-semibold text-[#8f0fff] cursor-pointer'>ADD TO CART</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:flex mb-14 mx-auto'>
        <div className='bg-white py-5 px-5 rounded-xl lg:ml-14 lg:mr-7 mx-5 mb-4'>
          <img className='flex rounded mx-auto w-[35rem]' src={product.image} alt=""/>
        </div>
        <div className='mx-5 lg:mr-14 lg:ml-7 md:w-6/12'>
          <div className='bg-white p-5 mx-auto rounded-xl mb-4'>
            <div className='flex justify-between'>
              <h1 className='text-[#8f0fff] font-semibold text-xl'>{product.name}</h1>
              <h1 className='font-medium text-xl'>{product.price}</h1>
            </div>
            <div className='my-2'>
              <p className='font-medium'>{product.color}</p>
              <div className='flex'>
                <p className='font-light mr-1'>Sold by :</p>
                <p className='font-medium text-[#8f0fff] ml-1 cursor-pointer hover:underline'>{product.brand}</p>
              </div>
            </div>
            <div className='my-4'>
              <h1 className='font-semibold'>Description</h1>
              <p>{product.description}</p>
            </div>
            <div className='bg-purple-100 p-5 rounded-xl cursor-pointer hover:opacity-80'>
              <div className='flex justify-between'>
                <h1 className='font-medium text-[#8f0fff]'>Customer Reviews</h1>
                <p>{product.rating} {product.numReviews}</p>
              </div>
              <h1 className='flex justify-end mt-4 text-[#8f0fff] font-semibold'>READ ALL</h1>
            </div>
          </div>
          <div className='bg-white p-3 rounded-xl'>
            <p className='font-medium my-2 mx-3 text-lg'>Status</p>
            <p className='text-[#8f0fff] font-semibold my-2 mx-3 text-lg'>In Stock ({product.countInStock})</p>
          </div>
          <div className='flex justify-around md:my-12 my-4'>
            <Link to='/checkout'><button className='text-white rounded-xl w-[15rem] py-4 drop-shadow text-center animate-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200'>BUY</button></Link>
            <button className='text-white w-[15rem] rounded-xl py-4 drop-shadow text-center animate-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200'>ADD TO CART</button>
          </div>
        </div>
      </div>
      </>
        ))
      }
          
  
      
    </div>
  )
}

export default Product