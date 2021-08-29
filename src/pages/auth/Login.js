import React, {Fragment, useState} from 'react';
import '../../style/pages/auth/login.scss';

const Login = () => {
    return (
        <Fragment>
            <div className="row">
                <form id="login-form">
                    <h1>Login</h1>
                    <div className="field-block">
                        <div><label>Email address</label></div>
                        <input type="email"
                               className="email"
                               name="email"
                        />
                    </div>
                    <div className="field-block">
                        <div><label>Password</label></div>
                        <input type="password"
                               name="password"
                        />
                    </div>
                    <div className="field-block">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;
