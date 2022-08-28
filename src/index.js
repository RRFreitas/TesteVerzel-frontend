import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/config.css';

import { BrowserRouter, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import * as serviceWorker from './serviceWorker';
import PrivateRoute from "./components/PrivateRoute";
import Theme from "./assets/theme"
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {Route} from "react-router-dom";

import Home from "./pages/home";
import Login from './pages/login'

import Navbar from "./components/Navbar"

import { AuthProvider } from "./context/AuthContext"

require('dotenv').config();


const privateRoutes = [
    /*{
        path: "/assets/*",
        exact: true,
        component: Asset
    },*/
]

const publicRoutes = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    }
    /*{
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/signin",
        exact: true,
        component: Signin,
    },*/
]

ReactDOM.render(
    <ThemeProvider theme={Theme} >
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <AuthProvider>
                    <Navbar /> 
                    <div>
                        <Switch>
                            {privateRoutes.map((route, index) => (
                                <PrivateRoute
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                            {publicRoutes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                            {/* 404? */}
                        </Switch>
                    </div>
                </AuthProvider>
            </BrowserRouter>
        </SnackbarProvider>
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
