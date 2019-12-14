import React, {Component} from 'react';
import './styles/app.css';
import Login from './components/login';
import Mailbox from './components/mailbox';
import axios from 'axios';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isUserAuthenticated: false};
        this.verifyCreds = this.verifyCreds.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    render() {
        return this.state.isUserAuthenticated
            ? <Mailbox
                userData={this.state.userData}
                onLogout={this.onLogout}/>
            : <Login
                submitCreds={this.verifyCreds}/>;
    }

    verifyCreds(username, password) {
        axios.post('/api/verifyCredentials/', {username, password})
            .then((res) => {
                this.setState({isUserAuthenticated: true, userData: res.data});
            }).catch(() => {
            this.setState({isUserAuthenticated: false, userData: undefined});
        });
    }

    onLogout() {
        this.setState({isUserAuthenticated: false, userData: undefined});
    }
}
