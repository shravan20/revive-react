import React from '../../../react-vite-learning/node_modules/@types/react';
import { RestroCard } from './RestroCard';
import { resList } from '../App';

export const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                {resList.map((restaurant) => (
                    <RestroCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
