import React, { Component } from 'react';
import * as _ from 'lodash';
import PrimarySidebar from './primary-sidebar';
import MailContainer from './mail-container';
import './../../styles/mailbox.css';

export default class Mailbox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.userData);
        const { userData } = this.props;
        const { firstName, lastName, email, displayImage, mails } = userData;
        const unreadMails = _.filter(mails, mail => mail.read === false).length;
        console.log(unreadMails);
        return (
            <div className="container">
                    <div className="mail-box">
                        <PrimarySidebar
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            displayImage={displayImage}
                            unreadMails={unreadMails}
                        />
                        <MailContainer
                            mails={mails}
                            logout={this.props.logout}
                        />
                    </div>
            </div>
        );
    }
}
