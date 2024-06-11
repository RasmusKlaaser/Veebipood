import React, { useEffect, useState } from "react";

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
        <div id="secondary-showcase">
            <div className="container">
                <div>
                    {products.map(product => (
                        <div key={product._id} className="borders">
                            <img src={product.image}></img>
                            <h1>{product.name}</h1>
                            <h1> $ {product.price}</h1>
                            <h1>only {product.quantity} still available</h1>
                            <button onClick={() => handleProductAdd(product._id)}>ADD TO CART</button>
                        </div>
                    ))}
                    <a href='/checkout'>to checkout nupp</a>
                </div>
            </div>
        </div>
    );
}

export default Store;