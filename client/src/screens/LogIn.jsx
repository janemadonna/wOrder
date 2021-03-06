import React from 'react'
import { logInUser } from '../services/auth'
import { Link } from 'react-router-dom'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg:  ''
        })
    }

    onSignIn = event => {
        event.preventDefault()

        const { history } = this.props

        logInUser(this.state)
        .then(res => this.props.setAuthenticated(true))
        .then(() => history.push(`/`))
        .catch(error => {
            console.error(error)
            this.setState({
                isError: true,
                errorMsg: 'Invalid Username or Password',
                username: '',
                password: ''
            })
        })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <div className="signinButton">
                <button type="submit">log in</button>
            </div>
        }
    }
    render() {
        const { username, password } = this.state
        const editUserButton = this.props.user ? (<Link to={`/users/${this.props.user.id}/update`}>Edit Your Info</Link>) : null

        return (
            <div className="row">
                <div className="form-container">
                    <h3>Log In</h3>
                    <form onSubmit={this.onSignIn}>
                        <label>Username</label>
                        <input
                        required
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                        required
                        type="text"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                        />
                        {this.renderError()}
                        {editUserButton}
                    </form>

                </div>
            </div>
        )
    }
}

export default LogIn