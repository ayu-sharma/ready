import img2 from '../component/Photos/nike-cap.webp'
import img15 from '../component/Photos/nike-shoes1.webp'
import img16 from '../component/Photos/nike-shoes2.webp'
import img17 from '../component/Photos/nike-shoes3.webp'
const allproductdata = {
    products: [
        //NIKE
        {
            name: 'Nike Black Cap',
            slug: '/nike-black-cap',
            category: 'Caps',
            image: img2,
            price: 'Rs. 399',
            countInStock: 40,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Black baseball cap for men',  
        },
        {
            name: 'Nike Sneakers',
            slug: '/nike-sneakers',
            category: 'Shoes',
            image: img16,
            price: 'Rs. 4999',
            countInStock: 40,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Sneakers for all',  
        },
        {
            name: 'Nike Hightops',
            slug: '/nike-hightops',
            category: 'Shoes',
            image: img17,
            price: 'Rs. 7999',
            countInStock: 40,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Air jordans',  
        },
        {
            name: 'Nike Running Shoes',
            slug: '/nike-running-shoes',
            category: 'Shoes',
            image: img15,
            price: 'Rs. 3999',
            countInStock: 40,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Running shoes',  
        },
    ]
}

export default allproductdata;