import React from 'react'
import { signUp } from '../services/auth'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isError: false,
            errorMsg: 'Password entries do not match',
            username: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg:  ''
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirmation) {
            const credentials = {username: this.state.username, password: this.state.password}
            signUp(credentials)
            .then(res => this.props.setAuthenticated(true))
            .then(() => this.props.history.push(`/`))
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
    }

    render() {
        const { username, password, passwordConfirmation } = this.state
        return (
            <div className="row">
                <div className="form-container">
                    <h3 className='sign-up'>sign up</h3>
                    <form onSubmit={this.handleSubmit} className='sign-up-form' >
                        <div className='form-piece'>
                            <label>username</label>
                            <input
                            required
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-piece'>
                            <label>password</label>
                            <input
                            required
                            type="text"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-piece'>
                            <label>confirm password</label>
                            <input
                            required
                            type="text"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-piece'>
                            <input type='submit' />
                        </div>
                        {/* {this.renderError()} */}
                    </form>

                </div>
            </div>
        )
    }
}

export default SignUp