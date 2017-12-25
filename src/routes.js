import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import VerifyAccount from './components/verify_account';


class Routes extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/verify" component={VerifyAccount} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;