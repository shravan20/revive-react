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
            <img className="res-logo" src="https://cdn-icons-png.flaticon.com/128/13108/13108611.png" />
            <h3 style={{ "color": "red" }}>Meghana Foods</h3>
            <h4 >Biriyani, North India, Asian</h4>
            <h4 >4.4 stars</h4>
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