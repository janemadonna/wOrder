import React from 'react'
import Routes from '../routes'
import Nav from '../components/shared/Nav'

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
                <Nav
                user={user}
                />
                <Routes 
                user={user}
                setAuthenticated={this.props.setAuthenticated}
                />
            </div>
        )
    }
}

export default Container