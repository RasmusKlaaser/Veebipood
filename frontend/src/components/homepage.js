import React from "react";
import './homepage.css';
import Navbar from './navbar'

function HomePage(){
    return (
        <div>
            <Navbar/>
            <div id="showcase">
                <div className="container">
                    <div className="title-card">
                        <p>Surf Board</p>
                    </div>           
                </div>
                <div className="strike">
                    <p> Ride the waves like never before with our premium surfboards!</p>
                </div>
                <div className="storeb borders">
                    <div className="storec borders">
                        <a href="store" class="store-strike">
                            Store
                        </a>
                    </div>
                </div>
                <div className="store-follow">
                    <p>Follow us on social media</p>
                </div>
            </div> 
        </div>
    );
}
export default HomePage