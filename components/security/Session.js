'use strict';

import RestService from '../rest/RestService';

class SessionApi {
    constructor() {
        this.id = null;
        this.token = null;
        this.roles = [];
        this.permissions = [];
        this.landingPage = null;
    }

    create(session) {
        for (var key in session) {
            this[key] = session[key];
        }
    }

    isAuthenticated() {
        return this.id != null && this.token != null;
    }

    isAuthorized(permission) {
        return this.permissions.indexOf(permission) > -1;
    }

    destroy() {
        this.id = null;
        this.token = null;
        this.roles = [];
        this.permissions = [];
        this.landingPage = null;
    }
}


var Session = new SessionApi();

module.exports = Session;