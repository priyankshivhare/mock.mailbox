import React, {Component} from 'react';
import '../styles/login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submitCreds = this.submitCreds.bind(this);
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <input
                        type="text"
                        id="login"
                        className="fadeIn second"
                        placeholder="login"
                        value={this.state.username}
                        onChange={this.changeUsername}
                    />
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.changePassword}
                    />
                    <button className="btn btn-primary" onClick={this.submitCreds}>Login</button>
                </div>
            </div>
        );
    }

    changeUsername(event) {
        const username = event.target.value;
        this.setState({ username });
    }

    changePassword(event) {
        const password = event.target.value;
        this.setState({ password });
    }

    submitCreds() {
        this.props.submitCreds(this.state.username, this.state.password);
    }
}
