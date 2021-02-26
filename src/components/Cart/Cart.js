import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
        
    }

    let shippingPrice=0;
    if (totalPrice> 35) {
        shippingPrice = 0;
    } else if(totalPrice> 15) {
        shippingPrice = 4.99;
    } else if(totalPrice > 0){
        shippingPrice = 12.99;
    }

    const tax = (totalPrice/10).toFixed(2);
    const grandTotal = (totalPrice + shippingPrice +Number(tax)).toFixed(2);
    const formatNumber = (number) =>{
        const precision = number.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <h4>Items Ordered:{cart.length} </h4>
            <p>Product Price: {totalPrice}</p>
            <p><small>Shipping Price: {shippingPrice}</small></p>
            <p>Tax + VAT: {formatNumber(totalPrice)}</p>
            <h4>Total price: {grandTotal}</h4>
        </div>
    );
};

export default Cart;