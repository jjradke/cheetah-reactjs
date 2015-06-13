'use strict';

import RestService from '../rest/RestService';


    function SessionApi() {
        this.id = null;
        this.token = null;
        this.roles = [];
        this.permissions = [];
        this.landingPage = null;
    }

    Object.defineProperty(SessionApi.prototype,"create",{writable:true,configurable:true,value:function(session) {
        for (var key in session) {
            this[key] = session[key];
        }
    }});

    Object.defineProperty(SessionApi.prototype,"isAuthenticated",{writable:true,configurable:true,value:function() {
        return this.id != null && this.token != null && this.permissions.length > 0;
    }});

    Object.defineProperty(SessionApi.prototype,"isAuthorized",{writable:true,configurable:true,value:function(permission) {
        return this.permissions.indexOf(permission) > -1;
    }});

    Object.defineProperty(SessionApi.prototype,"destroy",{writable:true,configurable:true,value:function() {
        this.id = null;
        this.token = null;
        this.roles = [];
        this.permissions = [];
        this.landingPage = null;
    }});



var Session = new SessionApi();

module.exports = Session;