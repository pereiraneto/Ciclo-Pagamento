import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import CicloPagamento from '../cicloPagamento/cicloPagamento'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/cicloPagamentos' component={CicloPagamento} />
        <Redirect from='*' to='/' />
    </Router>
)
