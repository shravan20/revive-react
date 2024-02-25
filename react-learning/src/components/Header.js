import React from 'react';

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://cdn-icons-png.flaticon.com/128/1037/1037762.png" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};
