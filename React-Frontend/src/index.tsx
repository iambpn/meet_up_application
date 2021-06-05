import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {FavouritesContextProvider} from "./store/Favorite-context.js";

ReactDOM.render(
    <React.StrictMode>
        <FavouritesContextProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </FavouritesContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
