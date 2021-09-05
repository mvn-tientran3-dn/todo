import React from 'react';
import {NavLink} from "react-router-dom";

import '../../style/layouts/header.scss'

const Main = () => {
    return (
        <header>
            <h1>Todo List</h1>
            <nav>
                <NavLink exact activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/">Home</NavLink>
                <NavLink activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/todo">List</NavLink>
                <NavLink activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/account">Account</NavLink>
            </nav>
            <div className="info">
                <NavLink activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/login">Login</NavLink>
            </div>
        </header>
    );
}

export default Main;
