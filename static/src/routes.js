/* eslint new-cap: 0 */

import React from 'react';
import { Route, Switch } from 'react-router';

/* containers */
import { App } from './containers/App';
import { HomeContainer } from './containers/HomeContainer';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProtectedView from './components/ProtectedView';
import Account from './components/Account';
import NotFound from './components/NotFound';

import { DetermineAuth } from './components/DetermineAuth';
import { requireAuthentication } from './components/AuthenticatedComponent';
import { requireNoAuthentication } from './components/notAuthenticatedComponent';

export default (

    <App>
        <Switch>
            <Route path="/main" component={requireAuthentication(ProtectedView)} />
            <Route path="/login" component={requireNoAuthentication(LoginView)} />
            <Route path="/register" component={requireNoAuthentication(RegisterView)} />
            <Route path="/home" component={requireNoAuthentication(HomeContainer)} />
            <Route path="/account" component={requireAuthentication(Account)} />
            <Route path="*" component={DetermineAuth(NotFound)} />
        </Switch>
    </App>
);
