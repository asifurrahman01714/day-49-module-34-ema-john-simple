import React, {useState, useEffect} from 'react';
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager'
import fakeData from '../../fakeData';
import RiviewItem from '../RiviewItem/RiviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';


const Riview = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const hadleProceedCheckout =() =>{
        // console.log('order placed');
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();

        history.push('/shipment');
    }
    const removeProduct = (productKey) => {
        console.log('remove product clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        //const counts = productKeys.map(key => savedCart[key]);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        console.log(savedCart);
        console.log(productKeys);
        //console.log(counts);
        console.log(cartProducts);
        setCart(cartProducts);
        
    },[]);

    let thankYou ;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
            {/* <h1>Order riview  : {cart.length}</h1> */}
           <div className="product-container">
            {
                    cart.map(pd => <RiviewItem 
                        removeProduct={removeProduct} 
                        product={pd} 
                        key={pd.key}
                        >
                        </RiviewItem>)
                }
                {
                    thankYou
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                   <button onClick={hadleProceedCheckout} className='main-button'>Proceed Checkout</button>
               </Cart>
           </div>
        </div>
    );
};

export default Riview;