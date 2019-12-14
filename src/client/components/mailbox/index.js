import React, { Component } from 'react';
import * as _ from 'lodash';
import './../../styles/mailbox.css';

export default class Mailbox extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    render() {
        console.log(this.props.userData);
        const { userData } = this.props;
        const { firstName, lastName, email, displayImage, mails } = userData;
        return (
            <div className="container">
                    <div className="mail-box">
                        <aside className="sm-side">
                            <div className="user-head">
                                <a className="inbox-avatar">
                                    <img  width="64" height="60" src={displayImage}/>
                                </a>
                                <div className="user-name">
                                    <h5><a href="#">{firstName} {lastName}</a></h5>
                                    <span><a href="#">{email}</a></span>
                                </div>
                                <a className="mail-dropdown pull-right">
                                    <i className="fa fa-chevron-down"/>
                                </a>
                            </div>
                            <div className="inbox-body">
                                <a href="#myModal"  title="Compose" className="btn btn-compose">
                                    Compose
                                </a>
                            </div>
                            <ul className="inbox-nav inbox-divider">
                                <li className="active">
                                    <a href="#"><i className="fa fa-inbox"/> Inbox <span className="label label-danger pull-right">2</span></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-envelope-o"/> Sent Mail</a>
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
                            <ul className="nav nav-pills nav-stacked labels-info ">
                                <li> <h4>Buddy online</h4> </li>
                                <li> <a href="#"> <i className=" fa fa-circle text-success"/>Alireza Zare <p>I do not think</p></a>  </li>
                                <li> <a href="#"> <i className=" fa fa-circle text-danger"/>Dark Coders<p>Busy with coding</p></a> </li>
                                <li> <a href="#"> <i className=" fa fa-circle text-muted "/>Mentaalist <p>I out of control</p></a>
                                </li><li> <a href="#"> <i className=" fa fa-circle text-muted "/>H3s4m<p>I am not here</p></a>
                            </li><li> <a href="#"> <i className=" fa fa-circle text-muted "/>Dead man<p>I do not think</p></a>
                            </li>
                            </ul>
                        </aside>
                        <aside className="lg-side">
                            <div className="inbox-head">
                                <h3>Inbox</h3>
                                <form action="#" className="pull-right position">
                                    <div className="input-append">
                                        <input type="text" className="sr-input" placeholder="Search Mail"/>
                                            <button className="btn sr-btn" type="button"><i className="fa fa-search"/></button>
                                    </div>
                                </form>
                            </div>
                            <div className="inbox-body">
                                <div className="mail-option">
                                    <div className="chk-all">
                                        <input type="checkbox" className="mail-checkbox mail-group-checkbox"/>
                                            <div className="btn-group">
                                                <a dataToggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                                                    All
                                                    <i className="fa fa-angle-down "/>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#"> None</a></li>
                                                    <li><a href="#"> Read</a></li>
                                                    <li><a href="#"> Unread</a></li>
                                                </ul>
                                            </div>
                                    </div>

                                    <div className="btn-group">
                                        <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips">
                                            <i className=" fa fa-refresh"/>
                                        </a>
                                    </div>
                                    <div className="btn-group hidden-phone">
                                        <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                                            More
                                            <i className="fa fa-angle-down "/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#"><i className="fa fa-pencil"/> Mark as Read</a></li>
                                            <li><a href="#"><i className="fa fa-ban"/> Spam</a></li>
                                            <li className="divider"/>
                                            <li><a href="#"><i className="fa fa-trash-o"/> Delete</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group">
                                        <a data-toggle="dropdown" href="#" className="btn mini blue">
                                            Move to
                                            <i class="fa fa-angle-down "/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#"><i className="fa fa-pencil"/> Mark as Read</a></li>
                                            <li><a href="#"><i className="fa fa-ban"/> Spam</a></li>
                                            <li className="divider"/>
                                            <li><a href="#"><i className="fa fa-trash-o"/> Delete</a></li>
                                        </ul>
                                    </div>

                                    <ul className="unstyled inbox-pagination">
                                        <li><span>1-50 of 234</span></li>
                                        <li>
                                            <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left"/></a>
                                        </li>
                                        <li>
                                            <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right"/></a>
                                        </li>
                                    </ul>
                                </div>
                                <table className="table table-inbox table-hover">
                                    <tbody>
                                    <tr className="unread">
                                        <td className="inbox-small-cells">
                                            <input type="checkbox" className="mail-checkbox"/>
                                        </td>
                                        <td className="inbox-small-cells"><i className="fa fa-star"/></td>
                                        <td className="view-message  dont-show">PHPClass</td>
                                        <td className="view-message ">Added a new class: Login Class Fast Site</td>
                                        <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"/></td>
                                        <td className="view-message  text-right">9:27 AM</td>
                                    </tr>
                                    <tr className="">
                                        <td className="inbox-small-cells">
                                            <input type="checkbox" className="mail-checkbox"/>
                                        </td>
                                        <td className="inbox-small-cells"><i className="fa fa-star"/></td>
                                        <td className="view-message dont-show">JW Player</td>
                                        <td className="view-message">Last Chance: Upgrade to Pro for </td>
                                        <td className="view-message inbox-small-cells"/>
                                        <td className="view-message text-right">March 15</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </aside>
                    </div>
            </div>
        );
    }

    logout() {
        this.props.onLogout();
    }

}
