import React, { useState } from "react";
import RestroCard from "./RestroCard";
import { restaurants } from "../restaurants";

export default Body = () => {

    // Normal JS Variable
    // let items = restaurants;

    // State Variable
    const [items, setItems] = useState(restaurants);


    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onMouseEnter={() => {
                        console.log("onmouseover")
                        setItems(items.filter(res => res.data.avgRating > 4))
                    }}
                    onMouseLeave={() => {
                        setItems(restaurants)
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {items.map(restaurant =>
                    <RestroCard key={restaurant.data.id} resData={restaurant} />
                )}
            </div>
        </div>
    );
};
