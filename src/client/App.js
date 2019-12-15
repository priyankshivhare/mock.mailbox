import React, {Component} from 'react';
import * as _ from 'lodash';
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
        this.sendMail = this.sendMail.bind(this);
        this.sendMailToServer = this.sendMailToServer.bind(this);
        this.changeMailToRead = this.changeMailToRead.bind(this);
        this.deleteMail = this.deleteMail.bind(this);
    }

    render() {
        return this.state.isUserAuthenticated
            ? <Mailbox
                userData={this.state.userData}
                logout={this.onLogout}
                sendMail={this.sendMail}
                changeMailToRead={this.changeMailToRead}
                deleteMail={this.deleteMail}
                />
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

    sendMailToServer(to, cc, subject, body) {
        const {firstName, lastName} = this.state.userData;
        axios.post('/api/sendEmail/', {to, cc, subject, body, from: `${firstName} ${lastName}`})
            .then((res) => {
                console.log(res);
            }).catch(() => {

        });
    }

    onLogout() {
        this.setState({isUserAuthenticated: false, userData: undefined});
    }

    sendMail(to, cc, subject, body) {
        this.setState({
            userData: {
                ...this.state.userData,
                outbox: _.concat(this.state.userData.outbox, {from: to, cc, subject, body })

            }
        });
        this.sendMailToServer(to, cc, subject, body);
    }

    changeMailToRead(index) {
        let modifiedMail = this.state.userData.inbox[index];
        modifiedMail.read = true;
        let modifiedInboxState = this.state.userData.inbox;
        modifiedInboxState[index] = modifiedMail;
        this.setState({
            userData: {
                ...this.state.userData,
                inbox: modifiedInboxState

            }
        })
    }

    deleteMail(index) {
        let modifiedInboxState = this.state.userData.inbox;
        modifiedInboxState.splice(index, 1);
        this.setState({
            userData: {
                ...this.state.userData,
                inbox: modifiedInboxState

            }
        })
    }
}
