import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Orders from './Pages/Orders/Orders';
import Products from './Pages/Products/Products';
import PrivateRoute from './PrivateRoute';

//All routing related things are here
function Routes() {
    return (
        <Router>
            <Switch>
                {/* Routes that need authentication is passed to PrivateRoute component */}
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/products" component={Products} />
                <PrivateRoute exact path="/orders" component={Orders} />
                <Route exact path="/login" component={Login} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    )
}

export default Routes
