import React, { useEffect, useState } from "react";

function Store() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log('data:', data);
                // List of product IDs
                const productIDs = ['66621af72210b19e6267b512', '66621b03e231f0219de61084'];

                // Filter products based on the provided IDs
                const filteredProducts = data.filter(product => productIDs.includes(product._id));
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    /*
    const handlequantity = async () => {
        if (product.quantity > 0) {
            const updatedProduct = { ...product, quantity: product.quantity - 1 };
            setProduct(updatedProduct);

            try {
                const response = await fetch(`/api/products/${product._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedProduct),
                });

                if (!response.ok) {
                    throw new Error('failed to update product');
                }
            } catch (error) {
                console.error('error updating product:', error);
            }
        }
    };*/

    if (products.length === 0) {
        return <div>Loading...</div>; 
    }

    // cart system
    let cart = {};
    const test = (id) => {
        cart[id] = (cart[id] || 0) + 1;
        console.log(cart);
    };
    return (
        <div id="secondary-showcase">
            <div className="container">
                <div className="store-photo">
                    <a href="./checkout"><div className="store-thumb1 borders"></div></a>             
                    <a href="checkout"><div className="store-thumb2 borders"></div></a>
                    <a onClick={() => test('66621af72210b19e6267b512')} href="checkout"><div className="store-thumb3 borders"></div></a>
                </div>
                <div className="store-text">
                    <div className="store-text-block1 borders">
                        <h1>Name: {products[0].name}</h1>
                        <h1>Price: {products[0].price} $</h1>
                        <h1>{products[0].quantity} available</h1>
                        <button onClick={() => test(products[0]._id)}> ADD TO CART</button>
                    </div>
                    <div className="store-text-block2 borders"></div>
                        <h1>Name: {products[1].name}</h1>
                        <h1>Price: {products[1].price} $</h1>
                        <h1>{products[1].quantity} available</h1>
                        <button onClick={() => test(products[1]._id)}> ADD TO CART</button>
                    <div className="store-text-block3 borders"></div>
                </div>
            </div>
        </div>
    );
}

export default Store;
