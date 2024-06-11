import React from "react";
import './homepage.css';
import Navbar from './navbar'
import About from './about'
import Footer from './footer'

function HomePage() {
    return (
        <div className="Showcase">
            <div className="Showcase-bg-primary">
                <Navbar/>
                <div className="Container Page-Height">
                    <div className="Title">
                        <div className="Title-card Center Borders-primary">
                            <h1>Surf Board</h1>
                        </div>
                    </div>
                    <div className="Quote Center">
                        <p>Ride the waves like never before with our premium surfboards!</p>
                    </div> 
                    <div className="Product-list Text-body Borders-secondary Center">
                        <a href="/store" class="Product-list-button Borders-secondary">Product list</a>
                    </div>
                </div>
                <About/>
                <Footer/>         
            </div> 
        </div>
    );
}
export default HomePage