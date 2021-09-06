import React, {Fragment}  from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./home/Index";
import Login from "./auth/Login";
import Account from "./account/Index";
import Todo from "./todo/Index";
import Detail from "./todo/Detail";
import ProtectedRoute from "./auth/ProtectedRoute";
import {useSelector} from "react-redux";

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/todo',
        component: Todo,
        exact: true,
    },
    {
        path: "/todo/:id",
        component: Detail
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/account',
        component: Account,
    }
];

const Index = () => {
    const loggedIn = useSelector((state => state.todoList.loggedIn));

    return  <Fragment>
        <Switch>
            {routes.map((route, i) => {
                if (route.path !== '/login' && loggedIn === '') {
                    return <ProtectedRoute exact={route.exact} key={i} path={route.path} component={route.component}/>
                }
                return <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    render={item => (
                        <route.component routes={item.component} />
                    )}
                />
            })}
        </Switch>
        </Fragment>
}

export default Index;
