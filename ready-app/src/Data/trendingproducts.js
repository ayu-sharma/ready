import img1 from '../component/Photos/prodimg4.jpeg'
import img2 from '../component/Photos/nike-cap.webp'
import img3 from '../component/Photos/puma-aero13.webp'
import img4 from '../component/Photos/oneplus-z3.jpg'
import img5 from '../component/Photos/iphone-13.jpg'
const allproductdata = {
    products: [
        {
            name: 'Apple iPhone 13',
            slug: '/apple-iphone-13',
            category: 'Smartphones',
            image: img5,
            price: 70999,
            countInStock: 12,
            brand: 'Apple',
            rating: 5,
            numReviews: 5,
            description: 'Smartphone with iOS',  
        },
        {
            name: 'H&M Black T-shirt',
            slug: '/hnm-black-tshirt',
            category: 'Apparel',
            image: img1,
            price: 999,
            countInStock: 20,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'Black slim fit t-shirt for men',  
        },
        {
            name: 'Nike Black Cap',
            slug: '/nike-black-cap',
            category: 'Apparel',
            image: img2,
            price: 399,
            countInStock: 40,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Black baseball cap for men',  
        },
        {
            name: 'Oneplus Buds Z3',
            slug: '/oneplus-buds-z3',
            category: 'Earphones',
            image: img4,
            price: 4599,
            countInStock: 25,
            brand: 'Oneplus',
            rating: 4.5,
            numReviews: 10,
            description: 'Noise-cancelling earbuds',  
        },
        {
            name: 'Puma Sneakers Aero 13s',
            slug: '/puma-aero-13s',
            category: 'Apparel',
            image: img3,
            price: 2199,
            countInStock: 34,
            brand: 'Puma',
            rating: 4,
            numReviews: 5,
            description: 'Unisex casual sneakers',  
        },
    ]
}

export default allproductdata;