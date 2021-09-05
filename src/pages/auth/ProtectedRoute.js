import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {

                return localStorage.getItem('loggedIn')
                    ? (<Comp {...props} />)
                    : (<Redirect to="/login" />);
            }}
        />
    );
};

export default ProtectedRoute
