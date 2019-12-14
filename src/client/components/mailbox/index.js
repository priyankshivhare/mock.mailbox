import React, { Component } from 'react';

export default class Mailbox extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <button className="btn btn-primary" onClick={this.logout}>Log out</button>
            </div>
        );
    }

    logout() {
        this.props.onLogout();
    }

}
