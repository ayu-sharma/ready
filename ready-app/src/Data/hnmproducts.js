import img11 from '../component/Photos/hnm-sweat.jpeg'
import img12 from '../component/Photos/hnm-shoes1.jpeg'
import img13 from '../component/Photos/hnm-shirt.webp'
import img14 from '../component/Photos/hnm-shoes2.webp'
import img1 from '../component/Photos/prodimg4.jpeg'

const allproductdata = {
    products: [
        //H&M
        {
            name: 'H&M Black T-shirt',
            slug: '/hnm-black-tshirt',
            category: 'Shirt',
            image: img1,
            price: 'Rs. 999',
            countInStock: 20,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'Black slim fit t-shirt for men',  
        },
        {
            name: 'H&M Black Sweatshirt',
            slug: '/hnm-black-sweatshirt',
            category: 'Shirt',
            image: img11,
            price: 'Rs. 1099',
            countInStock: 20,
            brand: 'H&M',
            rating: 4,
            numReviews: 10,
            description: 'Black relaxed fit sweatshirt for men',  
        },
        {
            name: 'H&M Sneakers',
            slug: '/hnm-sneakers',
            category: 'Shoes',
            image: img12,
            price: 'Rs. 1999',
            countInStock: 20,
            brand: 'H&M',
            rating: 4,
            numReviews: 10,
            description: 'Sneakers for women',  
        },
        {
            name: 'H&M Shirt',
            slug: '/hnm-shirt',
            category: 'Shirt',
            image: img13,
            price: 'Rs. 1199',
            countInStock: 20,
            brand: 'H&M',
            rating: 4,
            numReviews: 10,
            description: 'Flannel shirt for men',  
        },
        {
            name: 'H&M Boots',
            slug: '/hnm-boots',
            category: 'Shoes',
            image: img14,
            price: 'Rs. 2199',
            countInStock: 20,
            brand: 'H&M',
            rating: 4,
            numReviews: 10,
            description: 'Boots for men',  
        },
        
    ]
}

export default allproductdata;