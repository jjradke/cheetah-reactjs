'use strict';

import React from 'react';
import { Link } from 'react-router';
import RestService from './../rest/RestService';
import SearchField from './../search-results/SearchField';
import SearchResultsContainer from './../search-results/SearchResultsContainer';
import AuthManager from '../security/AuthManager';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.login = this.login.bind(this);
        this.facebookLogin = this.facebookLogin.bind(this);
        this.linkedinLogin = this.linkedinLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.state[event.target.id] = event.target.value;
        this.setState(this.state);
    }

    login(provider) {
        var data = typeof(provider) == 'string' ? { provider: provider } : this.state;

        AuthManager.login(data).subscribe((response) => {
            this.context.router.transitionTo('home');
        }, (errorResponse) => {
            // the login failed
        });
    }

    facebookLogin(e) {
        e.preventDefault();

        this.login('facebook');
    }

    linkedinLogin(e) {
        e.preventDefault();

        this.login('linkedin');
    }

    onSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div class="row">
                <div class="col-md-8">
                    <section id="loginForm">
                        <form class="form-horizontal" onSubmit={this.onSubmit}>
                            <hr />
                            <div class="form-group">
                                <label class="col-md-2 control-label" for="email">Email</label>
                                <div class="col-md-10">
                                    <input type="text" id="email" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 control-label" for="password">Password</label>
                                <div class="col-md-10">
                                    <input type="password" class="form-control" id="password" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-offset-2 col-md-10">
                                    <div class="checkbox">
                                        <input type="checkbox" id="rememberMe" onChange={this.handleChange} />
                                        <label for="rememberMe">Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-offset-2 col-md-10">
                                    <input type="submit" value="Log in" class="btn btn-default" onClick={this.login} />
                                </div>
                            </div>
                        </form>
                        <p>
                            <Link to="forgot">Forgot your password?</Link>
                        </p>
                    </section>
                </div>
                <div class="col-md-4">
                    <p>Or, use a social media account..</p>
                    <section id="socialLoginForm">
                        <a href="#" onClick={this.facebookLogin}>
                            <img src="../../../../images/auth/facebook-dreamstale25.png" width="32px" height="32px" />
                       </a>
                        &nbsp;
                        <a href="#" onClick={this.linkedinLogin}>
                            <img src="../../../../images/auth/linkedin-dreamstale45.png" width="32px" height="32px" />
                        </a>
                    </section>
                </div>
            </div>
        );
    }

}

LoginPage.contextTypes = {
    router: React.PropTypes.func
};

module.exports = LoginPage;