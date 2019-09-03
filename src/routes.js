import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Info from './components/Info/Info'
import Dashboard from './components/Dashboard/Dashboard'
import UserInfo from './components/UserInfo/UserInfo'
import Movies from './components/Movies/Movies'
import MovieDetails from './components/MovieDetails/MovieDetails'

export default (
    <Switch>
        <Route path='/movie/:movie_id' component={MovieDetails} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/' component={App} />
        {/* <Route path='/userinfo/:user_id' component={UserData} /> */}
        <Route exact path='/userinfo' component={UserInfo} />
        <Route path='/movie' component={Movies} />
    </Switch>
)