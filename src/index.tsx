import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export const renderEntireTree =()=> {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()
store.subscribe(renderEntireTree)
