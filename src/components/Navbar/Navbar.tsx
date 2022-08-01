import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/Profile' >Profile</NavLink>
            </div>
            <div>
                <NavLink to='/Dialogs' >Messages</NavLink>
            </div>
            <div>
                <NavLink to='/Users' >Users</NavLink>
            </div>
            <div>
                <NavLink to='/News' >News</NavLink>
            </div>
            <div>
                <NavLink to='/Music' >Music</NavLink>
            </div>
            <div>
                <NavLink to='/Settings' >Settings</NavLink>
            </div>
        </nav>
    );
}
/*<NavLink to='/Settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>*/
