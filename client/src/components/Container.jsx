import React from 'react'
import Routes from '../routes'
import Nav from '../components/shared/Nav'
import UserNav from '../components/shared/UserNav'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
    
    componentDidMount() {
        this.checkToken();
      }

    checkToken() {
        if (localStorage.getItem('token')) {
            this.props.setAuthenticated(true)
        }
    }

    render() {
        const { user } = this.state
        return (
            <div>
                {this.props.isAuthenticated ? <UserNav isAuthenticated={this.props.isAuthenticated}/> : 
                <Nav
                isAuthenticated={this.props.isAuthenticated}
                /> }
                <Routes 
                user={user}
                isAuthenticated={this.props.isAuthenticated}
                setAuthenticated={this.props.setAuthenticated}
                />
            </div>
        )
    }
}

export default Container