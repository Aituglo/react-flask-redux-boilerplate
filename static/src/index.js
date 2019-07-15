import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'


import configureStore, { history } from './store/configureStore';
import routes from './routes';
import './style.scss';

require('expose-loader?$!expose-loader?jQuery!jquery');

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
