import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {  
    // const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState([]);

    // data gulo server theke collect korar kaj
    useEffect(() => {
        fetch('https://salty-tundra-44328.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('https://salty-tundra-44328.herokuapp.com/productsByKeys',{
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))

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