'use strict';

import React from 'react';
import RestService from './../rest/RestService';
import AuthManager from '../security/AuthManager';
import BasePage from '../page/BasePage';
import Page from '../page/Page';

class ResetPasswordPage extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            code: props.code,
            email: props.email,
            message: 'Enter a new password.'
        };

        if (!this.state.code || !this.state.email) {
            this.state.message = "An error occurred.";
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.state[event.target.id] = event.target.value;
        this.setState(this.state);
    }

    submit(event) {
        event.preventDefault();
        AuthManager.reset(this.state).subscribe((response) => {
            this.succeed('Your password has successfully been reset.');
        }, (errorResponse) => {
            this.fail('An error has occurred with your request.');
        });
    }

    render() {
        var section;
        if (!this.isRequested()) {
            section = <form class="form-horizontal" onSubmit={this.submit}>
                <div class="form-group">
                    <label class="col-md-2 control-label" for="email">Email</label>

                    <div class="col-md-10">
                        {this.state.email}
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label" for="password">Password</label>

                    <div class="col-md-10">
                        <input type="password" class="form-control" id="password" onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label" for="password">Confirm Password</label>

                    <div class="col-md-10">
                        <input type="password" class="form-control" id="confirmPassword" onChange={this.handleChange}/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-offset-2 col-md-10">
                        <input type="submit" value="Submit" class="btn btn-default" />
                    </div>
                </div>
            </form>;
        }
        return (
            <Page section={section} message={this.state.message} requested={this.state.requested} success={this.state.success} />
        );
    }

}

ResetPasswordPage.contextTypes = {
    router: React.PropTypes.func
};

module.exports = ResetPasswordPage;