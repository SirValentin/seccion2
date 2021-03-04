import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { DataScreen } from '../components/data/DataScreen';
import { LoginScreen } from '../components/login/LoginScreen';

export const RouterApp = () => {

    return (
        <Router>
            <div>        
                <Switch>
                    <Route exact path="/account/login" component={LoginScreen} />
                    
                    <Route path="/account/data" component={DataScreen} />
                    <Route path="/" component={LoginScreen} />
                    <Redirect to="/account/login" />
                </Switch>
            </div>
        </Router>
    )
}
