import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    // console.log(first10);
    const[products, setProducts] = useState(first10);

    const[cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);

    }
    
    return (
        <div className='shop-container'>
            {/* <h1>shop</h1>
            <h1>Products length: {products.length}</h1> */}
            <div className="product-container">
               {products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)}
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;