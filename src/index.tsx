import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()
store.subscribe(renderEntireTree)
