import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Cookie from 'js-cookie'

console.log(Cookie.get('token'))
console.log(localStorage.getItem('token'))

//Checking whether user is authenticated and controls routes accordingly
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            //if token is there allow the route
            Cookie.get('token') ? (
                // localStorage.getItem('token') !== null ? (
                <Component {...props} />
            ) :
                // if no token redirect to login
                (
                    <Redirect to="/login" />
                )
        )} />
    )
}

export default PrivateRoute