import React, {useEffect, useState} from 'react';
import { json } from 'react-router-dom';
import './checkout.css';
import './store.css';
import Navbar from './navbar';
import Footer from './footer';

function Checkout() {

    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    // clear cart
    const clearCart = () => {
        window.localStorage.removeItem('cart');
        setCartProducts([]); 
    };

    // Fetch data from database
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);
    // fetch data from localStorage
    useEffect(() => {
        const cartData = window.localStorage.getItem('cart');
        const storedCart = JSON.parse(cartData);
        if (storedCart) {
            console.log(storedCart)
            const productIds = Object.keys(storedCart);
            const cartProducts = products.filter(product => productIds.includes(product._id));
            setCartProducts(cartProducts);
        }
    }, [products]);
    console.log({cartProducts})
    // calculate total
    const calculateTotal = () => {
        let total = 0;
        cartProducts.forEach(product => {
            total += product.price * JSON.parse(window.localStorage.getItem('cart'))[product._id];
        })
        return Math.trunc(total* 100) /100;
    }
    // item removal
    const removeItem = (id) => {
        const updatedCart = { ...JSON.parse(window.localStorage.getItem('cart')) };
        updatedCart[id]--;
    
 
        if (updatedCart[id] <= 0) {
            delete updatedCart[id];
        }
    
        window.localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    
        const updatedCartProducts = cartProducts.filter(product => {
            if (product._id === id) {
                return updatedCart[id] > 0; 
            }
            return true; 
        });
    
        setCartProducts(updatedCartProducts);
    };
    
    // place order

    const placeOrder = async (cart, total) => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cart, total })
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to place order');
            }
    
            const responseData = await response.json();
            console.log(responseData.message);
         
        } catch (error) {
            console.error( error);

        }
    };
    
   
    
    return (
        <div className='Showcase'>
            <div className="Showcase-bg-blank">
                <Navbar/>
                <div className='Container'>
                    <div className='Title-checkout'>
                        <h1>Checkout</h1>
                    </div>
                    <hr className='Division-line Borders-secondary' />
                    {cartProducts.map(product => (
                        <div className='Product-item Text-body Borders-secondary' key={product.id}>
                            <img className='Img Left Borders-secondary' src={product.image}/>
                            <div className='Product-info'>
                                <h1 className='Product-name Left'>{product.name}</h1>
                                <h1 className='Product-price Right'>$ {product.price}</h1>
                                <div className='Item-quantity'>
                                    <ul>
                                        <button className='Add-from-cart-button Borders-secondary' onClick={() => removeItem(product._id)}>+</button>
                                        <h1 className='From-quantity Text-secondary'><span className='Product-amount Text-primary'>{JSON.parse(window.localStorage.getItem('cart'))[product._id]}x</span> </h1>
                                        <button className='Remove-from-cart-button Borders-secondary' onClick={() => removeItem(product._id)}>-</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='Total'>
                        <h1 className='Total-name Left'>Total:</h1>
                        <h1 className='Total-price Right'>$ {calculateTotal()}</h1>
                    </div>
                    <hr className='Division-line Borders-secondary' />
                    <form className='Form Center'>
                        <label htmlFor="billing-email"></label>
                        <input
                            className="Form-large Text-body Borders-secondary billing-font"
                            type="email"
                            id="billing-email"
                            name="email"
                            placeholder="Example@gmail.com"
                        />
                        <br />
                        <input
                              className="Form-large Text-body Borders-secondary billing-font"
                            type="text"
                            id="billing-card-info"
                            name="card-info"
                            placeholder="Card information"
                        />
                        <br />
                        <div>
                            <input
                                className="Form-small Left Text-body Borders-secondary billing-font left"
                                type="text"
                                id="billing-mm-yy"
                                name="mm/yy"
                                placeholder="MM/YY"
                            />
                             <input
                                className="Form-small Right Text-body Borders-secondary billing-font right"
                                type="text"
                                id="billing-cvc"
                                name="cvc"
                                placeholder="CVC"
                            />
                        </div>
                    </form>
                    <button className='Checkout-button Left Borders-secondary' onClick={() => placeOrder(JSON.stringify(window.localStorage.getItem('cart')), calculateTotal())}>Purchase</button>
                    <button className='Checkout-button Right Borders-secondary' onClick={clearCart}>Clear cart</button>    
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Checkout;