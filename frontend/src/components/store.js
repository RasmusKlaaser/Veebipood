import React, { useEffect, useState } from "react";
import './store.css';
import Navbar from "./navbar";
import Footer from "./footer";

function Store() {
    // save data
    
    const storedCart = window.localStorage.getItem('cart');
    const initialCart = storedCart !== null ? JSON.parse(storedCart) : {};
    const [cart, setCart] = useState(initialCart);


    useEffect(() => {
        console.log(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart)
    }, [cart]);

   
    const handleProductAdd = (id) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            newCart[id] = (newCart[id] || 0) + 1;
            return newCart;
        });
    };
    



    const [products, setProducts] = useState([]);
    

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
    if (products.length === 0) {
        return <div>Loading...</div>; 
    }


    
    


    return (
        <div className="Showcase">
            <div className="Showcase-bg-primary">
                <Navbar/>
                <div className="Product-Outline Showcase-mg Page-Height">
                    <div className="Container Center Page-Height">
                        <div className="Title-product Center">
                            <h1>Product List</h1>
                        </div>
                        <div className="Product">
                            {products.map(product => (
                                <div key={product._id} className="Product-item Text-body Borders-secondary">
                                    <img className='Img Left Borders-secondary' src={product.image}></img>
                                    <div className="Product-info">
                                        <h1 className="Product-name Left">{product.name}</h1>
                                        <h1 className="Product-price Right"> $ {product.price}</h1>
                                       
                                        {product.quantity > 0 ? (
                                            <>
                                                <h1 className="Product-quantity Text-secondary">Only <span className="Product-amount Text-primary">{product.quantity}</span> still available</h1>
                                                <button className='Add-to-cart-button Borders-secondary'
                                                    onClick={() => handleProductAdd(product._id)}
                                                    disabled={cart[product._id] >= product.quantity}
                                                >
                                                    {cart[product._id] >= product.quantity ? 'limit reached' : 'ADD TO CART'}
                                                </button>
                                            </>
                                        ) : (
                                            <h1>Out of Stock</h1>
                                        )}
                                       
                                    </div>    
                                </div>
                            ))}
                            <div className="To-checkout Text-body Borders-secondary Center">
                                <a className="To-checkout-button Borders-secondary Center" href='/checkout'>Continue to checkout</a>
                            </div> 
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Store;