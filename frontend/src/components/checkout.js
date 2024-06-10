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
                const response = await fetch('/api/products');
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
                            </div>
                        ))}
                    <h1> Total: ${calculateTotal()}</h1>
                    <hr />
                    <br />
                    <div className="billing jetbrains-mono">
                        <form action="./confirmation.html">
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

                            <a href='confirmation' > ajutine  nupp
                                </a>
                        </form>
                            <button onClick={clearCart}>Clear cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;