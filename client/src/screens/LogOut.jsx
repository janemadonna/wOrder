import React from 'react'
import { logOut } from '../services/auth'

class LogOut extends React.Component {
    componentDidMount() {
        const { history, setAuthenticated } = this.props
        logOut()
        .then(() => setAuthenticated(false))
        .finally(() => history.push('/'))
    }
    
    render() {
        return ''
    }
}

export default LogOut