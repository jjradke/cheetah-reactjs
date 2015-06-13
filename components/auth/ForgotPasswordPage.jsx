'use strict';

import React from 'react';
import RestService from './../rest/RestService';
import AuthManager from '../security/AuthManager';

class ForgotPasswordPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.state[event.target.id] = event.target.value;
        this.setState(this.state);
    }

    submit() {
        AuthManager.forgot(this.state).subscribe((response) => {
            this.context.router.transitionTo('reset');
        }, (errorResponse) => {
            alert('problem')
        });
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-8">
                    <section id="loginForm">
                        <form class="form-horizontal">
                            <h4>Use a local account to log in.</h4>
                            <hr />
                            <div class="form-group">
                                <label class="col-md-2 control-label" for="email">Email</label>
                                <div class="col-md-10">
                                    <input type="text" id="email" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-offset-2 col-md-10">
                                    <input type="submit" value="Submit" class="btn btn-default" onClick={this.submit} />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }

}

ForgotPasswordPage.contextTypes = {
    router: React.PropTypes.func
};

module.exports = ForgotPasswordPage;