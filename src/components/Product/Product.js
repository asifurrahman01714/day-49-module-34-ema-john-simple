import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    // console.log(props.product);
    // console.log(`Product Name:  ${props.product.name}`);
    // console.log(props.product.key);
    const {img, name, seller, price, stock} = props.product;
    return (
      
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p> <small>By: {seller}</small> </p>
                <p>${price}</p>
                <p>Only {stock} left in the stock- Order Soon</p>
                <button className='main-button' onClick = {()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;