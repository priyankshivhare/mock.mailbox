import React, {Component} from 'react';
import * as _ from 'lodash';
import PrimarySidebar from './primary-sidebar';
import MailContainer from './mail-container';
import ComposeModal from './compose-modal';
import './../../styles/mailbox.css';

export default class Mailbox extends Component {

    constructor(props) {
        super(props);
        this.state = {composeModalOpen: false, inboxViewSelected: true, mailInState: {}};
        this.openComposeModal = this.openComposeModal.bind(this);
        this.openSentbox = this.openSentbox.bind(this);
        this.openInbox = this.openInbox.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openEmail = this.openEmail.bind(this);
    }

    render() {
        const {userData} = this.props;
        const {firstName, lastName, email, displayImage, inbox, outbox} = userData;
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
                        inboxSelected={this.state.inboxViewSelected}
                    />
                    { this.state.composeModalOpen && <ComposeModal sendMail={this.props.sendMail}
                                                                   closeModal={this.closeModal}
                                                                   mailInState={this.state.mailInState}/> }
                    <MailContainer
                        mails={this.state.inboxViewSelected ? inbox : outbox }
                        openEmail={this.openEmail}
                        logout={this.props.logout}
                    />
                </div>
            </div>
        );
    }

    openComposeModal() {
        this.setState({composeModalOpen: true});
    }

    openSentbox() {
        this.setState({inboxViewSelected: false});
    }

    openInbox() {
        this.setState({inboxViewSelected: true});
    }

    closeModal() {
        this.setState({composeModalOpen: false, mailInState: {}});
    }

    openEmail(index) {
        const {userData} = this.props;
        const { inbox, outbox} = userData;
        this.setState({
            composeModalOpen: true,
            mailInState: this.state.inboxViewSelected ? inbox[index] : outbox[index],
        });
        if (this.state.inboxViewSelected) {
            this.props.changeMailToRead(index);
        }
    }
}
