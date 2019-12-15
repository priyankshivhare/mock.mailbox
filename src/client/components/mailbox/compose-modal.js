import React, {Component} from 'react';
import * as _ from 'lodash';

export default class ComposeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {to: '', cc: '', subject: '', body: ''};
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeCC = this.onChangeCC.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.submitMail = this.submitMail.bind(this);
    }

    render() {
        let to, cc, subject, body  = undefined;
        if (!_.isEmpty(this.props.mailInState)) {
            to = this.props.mailInState.to;
            cc = this.props.mailInState.cc;
            subject = this.props.mailInState.subject;
            body = this.props.mailInState.body;
        }
        return (
            <div className="compose-container">
                <div>
                    <div>
                        <div>
                            <button className="close" type="button" onClick={this.props.closeModal}>×</button>
                            <h4>Compose</h4>
                        </div>
                        <div>
                            <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">To</label>
                                    <div className="col-lg-10">
                                        <input type="text" placeholder="" value={to || this.state.to}
                                               onChange={this.onChangeTo} id="inputEmail1" className="form-control"
                                               disabled={to && true}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Cc / Bcc</label>
                                    <div className="col-lg-10">
                                        <input type="text" placeholder="" value={cc || this.state.cc}
                                               onChange={this.onChangeCC} id="cc" className="form-control"
                                               disabled={cc && true}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Subject</label>
                                    <div className="col-lg-10">
                                        <input type="text" placeholder="" value={subject || this.state.subject}
                                               onChange={this.onChangeSubject} id="inputPassword1"
                                               className="form-control"
                                               disabled={subject && true}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Message</label>
                                    <div className="col-lg-10">
                                        <textarea rows="10" cols="30" value={body || this.state.body} className="form-control"
                                                  onChange={this.onChangeBody} id="" name=""
                                                  disabled={body && true}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-lg-offset-3 col-lg-10">
                                        <button disabled={to && true} onClick={this.submitMail} className="btn btn-send">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChangeTo(event) {
        this.setState({ to: event.target.value });
    }

    onChangeCC(event) {
        this.setState({ cc: event.target.value });
    }

    onChangeSubject(event) {
        this.setState({ subject: event.target.value });
    }

    onChangeBody(event) {
        this.setState({ body: event.target.value });
    }

    submitMail() {
        this.props.sendMail(this.state.to, this.state.cc, this.state.subject, this.state.body)
        this.props.closeModal();
    }
}
