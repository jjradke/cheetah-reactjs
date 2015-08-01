'use strict';

import React from 'react';
import { Link } from 'react-router';
import RestService from './../rest/RestService';
import AuthManager from '../security/AuthManager';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            failed: false
        };

        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.styles = {
            register: {
                marginTop: '10px'
            }
        }
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.state[event.target.id] = event.target.value;
        this.setState(this.state);
    }

    register(event) {
        event.preventDefault();
        AuthManager.register(this.state).subscribe((response) => {
            //this.context.router.transitionTo('home');
            this.state.registered = true;
            this.setState(this.state);
        }, (errorResponse) => {
            // the login failed
            this.state.failed = true;
            this.setState(this.state);
        });
    }

    render() {
        var section;

        if (!this.state.registered && !this.state.failed) {
            section = <div>
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
                                <label class="col-md-2 control-label" for="password">Confirm Password</label>
                                <div class="col-md-10">
                                    <input type="password" class="form-control" id="confirmPassword" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <div className="col-md-offset-2 col-md-10" style={this.styles.register}>
                                    <input type="submit" value="Register" class="btn btn-default" />
                                </div>
                            </div>
                        </div>;
        } else if (this.state.registered) {
            section = <div>An email has been sent to {this.state.email}.</div>
        }
        return (
            <div class="row">
                <div class="col-md-8">
                    <section id="registerForm">
                        <form class="form-horizontal" onSubmit={this.register}>
                            <h4>Create an account</h4>
                            <hr />
                            {section}
                        </form>
                    </section>
                </div>
            </div>
        );
    }

}

RegisterPage.contextTypes = {
    router: React.PropTypes.func
};

module.exports = RegisterPage;