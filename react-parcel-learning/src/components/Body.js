import React, { useState } from "react";
import RestroCard from "./RestroCard";
import { restaurants } from "../restaurants";

export default Body = () => {

    // Normal JS Variable
    // let items = restaurants;

    // State Variable: Whenever state variables update, React triggers a reconciliation cycle (re-render)
    const [items, setItems] = useState(restaurants);
    const [searchText, setSearchText] = useState(null);

    function searchTextOnType(e) {
        console.log("Current State =>" + searchText)

        let data = items.filter(item => {
            let name = item.data.name.toLowerCase();
            return name.includes(searchText.toLowerCase())
        });
        setItems(data);

        console.log(data)

    }


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={e => { setSearchText(e.target.value) }}
                    />
                    <button
                        onClick={e => searchTextOnType(e)}
                    >Search</button>

                </div>
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

