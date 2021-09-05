import React, {Fragment, useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import '../../style/pages/auth/login.scss';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../feature/todo/todoSlice";

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const loggedIn = useSelector((state) => state.todoList.loggedIn);
    const dispatch = useDispatch();
    const history = useHistory();

    if (loggedIn !== '') {
        return <Redirect to="/" />
    }

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm({...form, [name]: value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let info = {...form};
        if (info.email !== '' && info.password !== '') {
            dispatch(login(info.email));
            history.push('/');
        }
    }
    return (
        <Fragment>
            <div className="row">
                <form id="login-form">
                    <h1>Login</h1>
                    <div className="field-block">
                        <span className="note">*Nhập tuỳ ý*</span>
                    </div>
                    <div className="field-block">
                        <div><label>Email address</label></div>
                        <input type="email"
                               className="email"
                               name="email"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="field-block">
                        <div><label>Password</label></div>
                        <input type="password"
                               name="password"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="field-block">
                        <input type="submit" value="Submit" onClick={onSubmit}/>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;
