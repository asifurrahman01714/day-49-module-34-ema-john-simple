import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    console.log(products);

    const [cart, setCart] = useState([]);
    const handleProduct =(product) =>{
        console.log('product added');
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
           
            <div className='product-container'>
                <ul>
                    {
                        products.map(product =><Product product={product} handleProduct={handleProduct}/>)
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;