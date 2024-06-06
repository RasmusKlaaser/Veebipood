import React, { useEffect, useState } from "react";

function Store() {
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('failed to fetch products');
                }
                const data = await response.json();
                const productID = '66621af72210b19e6267b512';
                const foundProduct = data.find(product => product._id === productID);
                setProduct(foundProduct);
            } catch (error) {
                console.error('error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    // Conditional rendering to handle the case when product is undefined or null
    if (!product) {
        return <div>Loading...</div>; // Render a loading indicator while fetching data
    }

    return (
        <div id="secondary-showcase">
            <div className="container">
                <div className="store-photo">
                    <a href="./checkout"><div className="store-thumb1 borders"></div></a>             
                    <a href="checkout"><div className="store-thumb2 borders"></div></a>
                    <a href="checkout"><div className="store-thumb3 borders"></div></a>
                </div>
                <div className="store-text">
                    <div className="store-text-block1 borders">
                        <h1> Name: {product.name}</h1>
                        <h1>Price: {product.price} $</h1>
                        <h1>{product.quantity} available</h1>
                    </div>
                    <div className="store-text-block2 borders"></div>
                    <div className="store-text-block3 borders"></div>
                </div>
            </div>
        </div>
    );
}

export default Store;
