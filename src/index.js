import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={App} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
