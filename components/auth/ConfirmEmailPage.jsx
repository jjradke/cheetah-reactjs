'use strict';

import React from 'react';
import { Link } from 'react-router';
import RestService from './../rest/RestService';
import AuthManager from '../security/AuthManager';

class ConfirmEmailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmed: false,
            failed: false
        };
    }

    componentDidMount() {
        AuthManager.confirm({ email: this.props.email, code: this.props.code }).subscribe((response) => {
            this.state.confirmed = true;
            this.setState(this.state);
        }, (errorResponse) => {
            this.state.failed = true;
            this.setState(this.state);
        });
    }

    render() {
        var message;
        if (this.state.confirmed) {
            message = <div>
                        Your email address has been successfully confirmed.
                        <Link to="login">Click here to log in.</Link>
                      </div>;
        } else if (this.state.failed) {
            message = <div>
                        Something went wrong.
                      </div>
        } else {
            message = <div>Confirming...</div>;
        }
        return (
            <div class="row">
                <div class="col-md-8">
                    <section>
                        <h4>Confirmation</h4>
                        <hr />
                        {message}
                    </section>
                </div>
            </div>
        );
    }

}

ConfirmEmailPage.contextTypes = {
    router: React.PropTypes.func
};

module.exports = ConfirmEmailPage;