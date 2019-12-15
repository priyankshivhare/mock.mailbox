import React, {Component} from 'react';
import * as _ from 'lodash';
export default class MailContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <aside className="lg-side">
            <div className="inbox-head">
                <h3>Inbox</h3>
                <div className="pull-right">
                    <span onClick={this.props.logout}><i className="fa fa-sign-out"/> Log out</span>
                </div>
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
                    <div className="btn-group">
                        <a data-toggle="dropdown" href="#" className="btn mini blue">
                            Move to
                            <i class="fa fa-angle-down "/>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-pencil"/> Mark as Read</a></li>
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
                    { _.map(this.props.mails, (mail, index) => {
                        return <tr
                            className={mail.read || _.isUndefined(mail.read) ? '' : 'unread'}
                            onClick={() => this.props.openEmail(index)}
                        >
                            <td className="inbox-small-cells">
                                <input type="checkbox" className="mail-checkbox"/>
                            </td>
                            <td className="inbox-small-cells"><i className="fa fa-star"/></td>
                            <td className="view-message  dont-show">{mail.from}</td>
                            <td className="view-message ">{mail.subject}</td>
                            <td className="view-message  text-right">9:27 AM</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </aside>;
    }
}
