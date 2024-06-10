import React, {useEffect, useState} from 'react';
import { json } from 'react-router-dom';

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
        <>
            <nav id="navbar"></nav>
            <div id="third-showcase">
                <div className="container">
                    <div className="third-showcase-text jetbrains-mono">
                        <p>Checkout</p>
                    </div>
                   
                        {cartProducts.map(product => (
                            <div key={product.id}>
                                <img src={product.image}/>
                                <h1>{product.name}</h1>
                                <p>${product.price}</p>
                                <h1> * {JSON.parse(window.localStorage.getItem('cart'))[product._id]} </h1>
                                <button onClick={() => removeItem(product._id)}> X</button>
                            </div>
                        ))}
                    <h1> Total: ${calculateTotal()}</h1>
                    <button onClick={clearCart}>Clear cart</button>
                    <hr />
                    <br />
                    <div >
                        <form>
                            <label htmlFor="billing-email"></label>
                            <input
                                className="large-billing borders billing-font"
                                type="email"
                                id="billing-email"
                                name="email"
                                placeholder="Example@gmail.com"
                            />
                            <br />
                            <input
                                className="large-billing borders billing-font"
                                type="text"
                                id="billing-card-info"
                                name="card-info"
                                placeholder="Card information"
                            />
                            <br />
                            <div>
                                <input
                                    className="small-billing borders billing-font left"
                                    type="text"
                                    id="billing-mm-yy"
                                    name="mm/yy"
                                    placeholder="MM/YY"
                                />
                                <input
                                    className="small-billing borders billing-font right"
                                    type="text"
                                    id="billing-cvc"
                                    name="cvc"
                                    placeholder="CVC"
                                />
                            </div>
                            <br />

                        </form>
                            <button  onClick={() => placeOrder(JSON.stringify(window.localStorage.getItem('cart')), calculateTotal())}>Buy</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;