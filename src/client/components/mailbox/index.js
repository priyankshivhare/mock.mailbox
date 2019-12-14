import React, { Component } from 'react';
import * as _ from 'lodash';
import PrimarySidebar from './primary-sidebar';
import MailContainer from './mail-container';
import ComposeModal from './compose-modal';
import './../../styles/mailbox.css';

export default class Mailbox extends Component {

    constructor(props) {
        super(props);
        this.state = { composeModalOpen: false, inboxViewSelected: true };
        this.openComposeModal = this.openComposeModal.bind(this);
        this.openSentbox = this.openSentbox.bind(this);
        this.openInbox = this.openInbox.bind(this);
    }

    render() {
        console.log(this.props.userData);
        const { userData } = this.props;
        const { firstName, lastName, email, displayImage, inbox, outbox } = userData;
        const unreadMails = _.filter(inbox, mail => mail.read === false).length;
        return (
            <div className="container">
                    <div className="mail-box">
                        <PrimarySidebar
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            displayImage={displayImage}
                            unreadMails={unreadMails}
                            openComposeModal={this.openComposeModal}
                            openSentbox={this.openSentbox}
                            openInbox={this.openInbox}
                        />
                        { this.state.composeModalOpen && <ComposeModal/> }
                        <MailContainer
                            mails={this.state.inboxViewSelected ? inbox : outbox }
                            logout={this.props.logout}
                        />
                    </div>
            </div>
        );
    }

    openComposeModal() {
        this.setState({ composeModalOpen: true });
    }

    openSentbox() {
        this.setState({ inboxViewSelected: false });
    }

    openInbox() {
        this.setState({ inboxViewSelected: true });
    }
}
