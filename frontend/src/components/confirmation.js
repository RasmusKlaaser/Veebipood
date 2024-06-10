import React from 'react';

function Confirmation() {
    return (
        <>
    <div id="fourth-showcase">
        <div className="container">
            <div className="fourth-showcase-text jetbrains-mono">
                <p>Congratulations!</p>
            </div>
            <div className="fourth-showcase-text-2 jetbrains-mono">
                <p>Your order is on it's way!</p>
            </div>
            <div className="fourth-showcase-arrow">
                <svg width="609" height="46" viewBox="0 0 609 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M607.151 25.1213C608.323 23.9497 608.323 22.0503 607.151 20.8787L588.059 1.7868C586.888 0.615223 584.988 0.615223 583.817 1.7868C582.645 2.95837 582.645 4.85786 583.817 6.02944L600.787 23L583.817 39.9706C582.645 41.1421 582.645 43.0416 583.817 44.2132C584.988 45.3848 586.888 45.3848 588.059 44.2132L607.151 25.1213ZM0 26H605.03V20H0V26Z" fill="black"/>
                </svg>                  
            </div>
            <div className="fourth-showcase-box borders">
                <div className="fourth-showcase-box-text">
                    <p>People that bought the same product also purchased:</p>
                    <div class="fourth-showcase-box-picture borders"></div>
                </div>
            </div>
        </div>
    </div>
    <footer id="footer">
    </footer>
        </>
    )
}
export default Confirmation;