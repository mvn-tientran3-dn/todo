import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
    const loggedIn = useSelector((state => state.todoList.loggedIn));
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {

                return loggedIn
                    ? (<Comp {...props} />)
                    : (<Redirect to="/login" />);
            }}
        />
    );
};

export default ProtectedRoute
