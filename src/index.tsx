import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";



export const renderEntireTree =()=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()
subscribe(renderEntireTree)
