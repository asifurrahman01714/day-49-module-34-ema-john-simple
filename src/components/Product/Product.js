import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props);
   // console.log(props.product);
    const {name, seller, price, img, stock} = props.product;
    return (

        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>

            <div>
                <h4 className='product-title'>{name}</h4>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock. Order soon.</p>
                <button className='main-button' onClick={()=> props.handleProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;