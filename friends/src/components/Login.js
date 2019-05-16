import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                    name='username'
                    />

                    <input 
                    name='password'
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