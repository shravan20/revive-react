import React from "react";
import RestroCard from "./RestroCard";
import { restaurants } from "../restaurants";

export default Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Clicked");
                    }}
                >
                    Top Rated button
                </button>
            </div>
            <div className="restro-container">
                {restaurants.map(restaurant =>
                    <RestroCard key={restaurant.data.id} resData={restaurant} />
                )}
            </div>
        </div>
    );
};
