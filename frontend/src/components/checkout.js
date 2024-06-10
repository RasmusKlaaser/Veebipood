import React, {useEffect, useState} from 'react';

function Checkout() {
    // Cart clear button
    console.log(window.localStorage.getItem('cart'))
    const clearCart = () => {
        window.localStorage.removeItem('cart');
        console.log(window.localStorage.getItem('cart'))
    }

    // calculate total
    let total = 0;
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    console.log(cart)
    total += cart[0]
    console.log(total)

    return (
        <>
            <nav id="navbar"></nav>
            <div id="third-showcase">
                <div className="container">
                    <div className="third-showcase-text jetbrains-mono">
                        <p>Checkout</p>
                    </div>
                    <div className="pricing">
                        <div className="thumb-box borders">
                            <div className="thumb-box-pic borders"></div>
                        </div>
                        <div className="thumb-text-box">
                            <div className="thumb-text-left jetbrains-mono">
                                <p>Product Name</p>
                                <br />
                                <p>Shipping</p>
                                <br />
                                <p></p>
                            </div>
                            <div className="thumb-text-right jetbrains-mono">
                                <p>{total}€</p>
                                <br />
                                <p>0€</p>
                                <br />
                                <p>0€</p>
                            </div>
                        </div>
                    </div>
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