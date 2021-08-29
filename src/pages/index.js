import React, {Fragment}  from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Todo from "./todo/Index";
import List from "./todo/List";
import Login from "./auth/Login";
import Account from "./account/Index";

const routes = [
    {
        path: '/',
        component: Todo,
        exact: true
    },
    {
        path: '/todo',
        component: List,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/account',
        component: Account,
    }
];

function Index () {
    return  <Fragment>
        <Switch>
            {routes.map((route, i) => {
                // if (route.path === '/account' && user !== '') {
                //     return <PrivateRouter key={i} path={route.path} component={Account}/>
                // }
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
