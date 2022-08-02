import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from "./HeaderContainer";

export const Header = (props: HeaderContainerPropsType) => {

    return (

        <header className={s.header}>
            <img src='https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?size=626&ext=jpg'
                 alt='pic'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}