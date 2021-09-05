import React from 'react';
import {NavLink, Redirect} from "react-router-dom";

import '../../style/layouts/header.scss'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../feature/todo/todoSlice";

const Header = () => {
    const loggedIn = useSelector((state => state.todoList.loggedIn));
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        return <Redirect to="/login"/>
    }
    return (
        <header>
            <h1>Todo List</h1>
            <nav>
                <NavLink exact activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/">Home</NavLink>
                <NavLink activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/todo">List</NavLink>
                <NavLink activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/account">Account</NavLink>
            </nav>
            <div className="info">
                {loggedIn !== ''
                    ? <NavLink to="" onClick={handleLogout}>Logout</NavLink>
                    : <NavLink activeStyle={{color: '#f37c8e', fontWeight: 'bold'}} to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
