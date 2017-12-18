import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { LogUser } from './actions';
import reducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={App} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
