import React from 'react'
import Routes from '../routes'
import Nav from './shared/Nav'

class Container extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Nav />
                <Routes />
            </div>
        )
    }
}

export default Container