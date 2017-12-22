import React, { Component } from 'react';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import VerifyAccount from './components/verify_account';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class Routes extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/verify" component={VerifyAccount} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;