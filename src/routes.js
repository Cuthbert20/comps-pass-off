import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Info from './components/Info/Info'

export default (
    <Switch>
        <Route exact path='/info' component={Info} />
        <Route exact path='/' component={App} />
    </Switch>
)