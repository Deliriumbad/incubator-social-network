import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                        <Route path='/profile/:userId'
                               component={ProfileContainer}/>
                        <Route path='/dialogs/'
                               component={DialogsContainer}/>
                        <Route path='/news/'
                               component={News}/>
                        <Route path='/music/'
                               component={Music}/>
                        <Route path='/users/'
                               component={UsersContainer}/>
                        <Route path='/settings/'
                               component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
