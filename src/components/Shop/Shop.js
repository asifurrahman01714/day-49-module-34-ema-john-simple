import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    console.log(products);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        //const counts = productKeys.map(key => savedCart[key]);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    const handleProduct =(product) =>{
        console.log('product added');
        console.log(product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity =  count ;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='twin-container'>
           
            <div className='product-container'>
                <ul>
                    {
                        products.map(product =><Product key={product.key} product={product} handleProduct={handleProduct} showAddToCart={true}/>)
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                    <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;