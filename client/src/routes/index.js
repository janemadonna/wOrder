import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import Fictionary from '../screens/Fictionary'
import Anthology from '../screens/Anthology'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import NewWord from '../screens/NewWord'
import NewPoem from '../screens/NewPoem'
import LogOut from '../screens/LogOut'

const Routes = ({user, isAuthenticated, setAuthenticated}) => {
    return (
        <Switch>
            <Route
            exact
            path="/"
            render={props => (isAuthenticated ? <Dashboard isAuthenticated={isAuthenticated} {...props} /> : <Home isAuthenticated={isAuthenticated} {...props} />)}
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
            render={props => <LogIn {...props} setAuthenticated={setAuthenticated}/>}
            />
            <Route 
            exact
            path='/logout'
            render={props => <LogOut {...props} setAuthenticated={setAuthenticated}/>}
            />
            <Route 
            exact
            path='/signup'
            render={props => <SignUp {...props}/>}
            />
            <Route 
            exact
            path='/newword'
            render={props => (isAuthenticated ? <NewWord isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} user={user} {...props}/> :
                <Redirect to='/'/> )}
            />
            <Route 
            exact
            path='/newpoem'
            render={props => (isAuthenticated ? <NewPoem isAuthenticated={isAuthenticated} {...props}/> :
                <Redirect to='/'/> )}
            />
        </Switch>
    )
}

export default Routes