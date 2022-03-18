import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateRootPropsType, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";


export const renderEntireTree =(state:StateRootPropsType)=> {
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

