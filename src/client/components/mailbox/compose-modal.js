import React, { Component } from 'react';

export default class ComposeModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="compose-container">
                <div>
                    <div>
                        <div>
                            <button className="close" type="button">×</button>
                            <h4>Compose</h4>
                        </div>
                        <div>
                            <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">To</label>
                                    <div className="col-lg-10">
                                        <input type="text" placeholder="" id="inputEmail1" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Cc / Bcc</label>
                                    <div className="col-lg-10">
                                        <input type="text" placeholder="" id="cc" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Subject</label>
                                    <div className="col-lg-10">
                                        <input type="text" placeholder="" id="inputPassword1" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Message</label>
                                    <div className="col-lg-10">
                                        <textarea rows="10" cols="30" className="form-control" id="" name=""/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-lg-offset-3 col-lg-10">
                                        <button className="btn btn-send">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
