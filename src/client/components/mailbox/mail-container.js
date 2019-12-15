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
                        >
                            <td className="inbox-small-cells">
                                { this.props.inboxViewSelected &&
                                <a href="#" onClick={() => this.props.deleteMail(index)}><i className="fa fa-trash-o"/></a>
                                }
                            </td>
                            <td className="inbox-small-cells"><i className="fa fa-star"/></td>
                            <td className="view-message  dont-show"
                                onClick={() => this.props.openEmail(index)}>{mail.from}</td>
                            <td className="view-message "
                                onClick={() => this.props.openEmail(index)}>{mail.subject}</td>
                            <td className="view-message  text-right">9:27 AM</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </aside>;
    }
}
