import React from 'react';

import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                    name='username'
                    onChange={this.handleChange}
                    value={this.state.credentials.username}
                    />

                    <input 
                    name='password'
                    onChange={this.handleChange}
                    value={this.state.credentials.password}
                    />

                    <button>
                        Log in
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})

export default connect(
    mapStateToProps,
    { login }
)(Login)