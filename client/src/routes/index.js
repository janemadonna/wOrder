import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import Fictionary from '../screens/Fictionary'
import Anthology from '../screens/Anthology'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'

const Routes = ({user}) => {
    return (
        <Switch>
            <Route
            exact
            path="/"
            render={props => (user ? <Dashboard user={user} {...props} /> : <Home user={user} {...props} />)}
            />
            <Route
            exact
            path='/fictionary'
            render={props => <Fictionary {...props}/>}
            />
            <Route 
            exact
            path='/anthology'
            render={props => <Anthology {...props}/>}
            />
            <Route 
            exact
            path='/login'
            render={props => <LogIn {...props}/>}
            />
            <Route 
            exact
            path='/signup'
            render={props => <SignUp {...props}/>}
            />
        </Switch>
    )
}

export default Routes