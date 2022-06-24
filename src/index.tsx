import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreContext} from "./StoreContext";

export const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);
