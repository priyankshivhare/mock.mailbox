import React, {Component} from 'react';
export default class PrimarySidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <aside className="sm-side">
            <div className="user-head">
                <a className="inbox-avatar">
                    <img width="64" height="60" src={this.props.displayImage}/>
                </a>
                <div className="user-name">
                    <h5><a href="#">{this.props.firstName} {this.props.lastName}</a></h5>
                    <span><a href="#">{this.props.email}</a></span>
                </div>
                <a className="mail-dropdown pull-right">
                    <i className="fa fa-chevron-down"/>
                </a>
            </div>
            <div className="inbox-body">
                <a href="#" title="Compose" className="btn btn-compose" onClick={this.props.openComposeModal}>
                    Compose
                </a>
            </div>
            <ul className="inbox-nav inbox-divider">
                <li className={this.props.inboxSelected && "active"}>
                    <a href="#" onClick={this.props.openInbox}><i className="fa fa-inbox"/> Inbox <span className="label label-danger pull-right">{this.props.unreadMails}</span></a>
                </li>
                <li className={!this.props.inboxSelected && "active"}>
                    <a href="#" onClick={this.props.openSentbox}><i className="fa fa-envelope-o"/> Sent Mail</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-bookmark-o"/> Important</a>
                </li>
                <li>
                    <a href="#"><i className=" fa fa-external-link"/> Drafts <span className="label label-info pull-right">30</span></a>
                </li>
                <li>
                    <a href="#"><i className=" fa fa-trash-o"/> Trash</a>
                </li>
            </ul>
            <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
                <li> <h4>Labels</h4> </li>
                <li> <a href="#"> <i className=" fa fa-sign-blank text-danger"/> Work </a> </li>
                <li> <a href="#"> <i className=" fa fa-sign-blank text-success"/> Design </a> </li>
                <li> <a href="#"> <i className=" fa fa-sign-blank text-info "/> Family </a>
                </li><li> <a href="#"> <i className=" fa fa-sign-blank text-warning "/> Friends </a>
            </li><li> <a href="#"> <i className=" fa fa-sign-blank text-primary "/> Office </a>
            </li>
            </ul>
        </aside>;
    }
}
