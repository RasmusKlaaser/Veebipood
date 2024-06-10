import React from 'react';
import './about.css';

function About() {
    return (
        <div id="about" className='Showcase-bg-secondary-large'>
            <div className="Container Center">
                <div className="Center">
                    <div className='Title-about'>
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className='Mission-title'>
                    <h2>Our Mission</h2>
                </div>
                <div className='Mission-body Center Borders-secondary Text-secondary'>
                    <p>
                        Our mission is to provide the best surfboards for the best prices. 
                        We have been in the business for over 20 years and have been able to provide our customers with the best surfboards available. 
                        We have a wide selection of surfboards for all skill levels and we are confident that you will find the perfect surfboard for you. 
                        Our team of experts are always available to answer any questions you may have and to help you find the perfect surfboard. 
                        We are committed to providing the best customer service and the best surfboards available. We look forward to helping you find the perfect surfboard!
                    </p>
                </div>
                <div className='Values-title'>
                    <h2>Our Values</h2>
                </div>
                <div className='Values-body Center Borders-secondary Text-secondary'>
                    <ul>
                        <li>Our values are what set us apart from other surfboard companies.</li>
                        <li>We are committed to providing the best customer service and the best surfboards available.</li>
                        <li>We believe in providing our customers with the best surfboards for the best prices.</li>
                        <li>Our team of experts are always available to answer any questions you may have and to help you find the perfect surfboard.    </li>
                        <li>We are committed to providing the best customer service and the best surfboards available.</li>
                        <li>We believe in providing our customers with the best surfboards for the best prices.</li>
                    </ul>
                </div>
                <div className='Follow Center'>
                    <div className="Follow-text">
                        <p>Follow us on social media!</p>
                        <div className="Follow-icons">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com" className="Store-follow-icon">
                                        <img src="../../img/facebook.png" alt="facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" className="Store-follow-icon">
                                        <img src="../../img/instagram.png" alt="instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com" className="Store-follow-icon">
                                        <img src="../../img/twitter.png" alt="twitter"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;