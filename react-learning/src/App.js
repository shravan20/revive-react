import React from 'react';
import ReactDOM from 'react-dom';
import restaurants from './restaurants.json'
import { AppLayout } from './components/AppLayout';

export const resList = restaurants

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);