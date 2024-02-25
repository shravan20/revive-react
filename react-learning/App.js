import React from 'react';
import ReactDOM from 'react-dom';


const Header = () => {
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
    )
}

const RestroCard = () => {
    return (
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                <RestroCard />
            </div>
        </div>
    )
}


const AppLayout = () => <div className="app"><Header /><Body /></div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);