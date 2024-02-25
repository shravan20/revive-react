import React from '../../react-vite-learning/node_modules/@types/react';
import ReactDOM from '../../react-vite-learning/node_modules/@types/react-dom';
import restaurants from './restaurants.json'
import { AppLayout } from './components/AppLayout';

export const resList = restaurants

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);