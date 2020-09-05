import React, {Component, useEffect, useState} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {ReactCookieProps, withCookies} from "react-cookie";

type AuthedRouteProps = RouteProps & ReactCookieProps & { to: string}

const AuthedRoute = (props: AuthedRouteProps) => {
    const {to: to, component: Component, cookies:ck, ...rest} = props;
    const checkIfAuthed = () => true;
    const [isAuthed, setAuthed] = useState(checkIfAuthed());

    useEffect(() => {
        setAuthed(checkIfAuthed());
    });
    console.log(ck)
    console.log(isAuthed)

    return (
        //@ts-ignore
        <Route {...rest} render={props => !isAuthed ? <Redirect to={to}/> : <Component {...props} />}/>
    );
};

export default withCookies(AuthedRoute);