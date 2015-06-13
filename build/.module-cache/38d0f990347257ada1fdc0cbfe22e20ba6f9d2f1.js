'use strict';

import React from 'react';
import Rx from 'Rx';
import Session from './Session';
import FacebookManager from './FacebookManager';
import LinkedinManager from './LinkedinManager';
import AuthService from './AuthService';
import lscache from 'lscache';


    function AuthManagerApi() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);

        if (lscache.get('session') != null) {
            this.createSession(lscache.get('session'));
        }
    }

    Object.defineProperty(AuthManagerApi.prototype,"getUserId",{writable:true,configurable:true,value:function() {
        return Session.id;
    }});

    Object.defineProperty(AuthManagerApi.prototype,"register",{writable:true,configurable:true,value:function(userInformation) {
        return Rx.Observable.create(function(observer)  {
           AuthService.register(userInformation).subscribe(function(response)  {
               observer.onNext(response);
               observer.onCompleted();
           }, function(errorResponse)  {
               observer.onError(errorResponse);
           });
        });
    }});

    Object.defineProperty(AuthManagerApi.prototype,"confirm",{writable:true,configurable:true,value:function(data) {
        return Rx.Observable.create(function(observer)  {
            AuthService.confirm(data).subscribe(function(response)  {
                observer.onNext(response);
                observer.onCompleted();
            }, function(errorResponse)  {
                observer.onError(errorResponse);
            });
        });
    }});

    Object.defineProperty(AuthManagerApi.prototype,"login",{writable:true,configurable:true,value:function(credentials) {
        if (!!credentials.provider) {
           if (credentials.provider == 'facebook') {
               return Rx.Observable.create(function(observer)  {
                   FacebookManager.login().subscribe(function(facebookResponse)  {
                       AuthService.externalLogin(facebookResponse).subscribe(function(apiResponse)  {
                           console.log(apiResponse);
                           this.createSession(apiResponse);
                           observer.onNext(apiResponse);
                           observer.onCompleted();
                       }.bind(this));
                   }.bind(this));
               }.bind(this));
           } else if (credentials.provider == 'linkedin') {
               return Rx.Observable.create(function(observer)  {
                   LinkedinManager.login().subscribe(function(linkedinResponse)  {
                       AuthService.externalLogin(linkedinResponse).subscribe(function(apiResponse)  {
                           this.createSession(apiResponse);
                           observer.onNext(apiResponse);
                           observer.onCompleted();
                       }.bind(this));
                   }.bind(this));
               }.bind(this));
           }
        } else {
            return Rx.Observable.create(function(observer)  {
                return AuthService.login(credentials).subscribe(function(response)  {
                    this.createSession(response);
                    observer.onNext(response);
                    observer.onCompleted();
                }.bind(this), function(errorResponse)  {
                    observer.onError(errorResponse);
                });
            }.bind(this));
        }
    }});

    Object.defineProperty(AuthManagerApi.prototype,"logout",{writable:true,configurable:true,value:function(clientOnly) {
       return Rx.Observable.create(function(observer)  {
           if (!clientOnly) {
               AuthService.logout().subscribe(function(response)  {
                   lscache.remove('session');
                   this.clearHeaders();
                   Session.destroy();
                   observer.onNext(response);
                   observer.onCompleted();
               }.bind(this), function(errorResponse)  {
                   if (errorResponse.status == 401) {
                       lscache.remove('session');
                       this.clearHeaders();
                       Session.destroy();
                       observer.onNext(null);
                       observer.onCompleted();
                   } else {
                       observer.onError(errorResponse);
                   }
               }.bind(this));
           } else {
               lscache.remove('session');
               this.clearHeaders();
               Session.destroy();
               observer.onNext(null);
               observer.onCompleted();
           }
       }.bind(this));
    }});

    Object.defineProperty(AuthManagerApi.prototype,"forgot",{writable:true,configurable:true,value:function(requestData) {
        return Rx.Observable.create(function(observer)  {
            AuthService.forgot(requestData).subscribe(function(response)  {
                observer.onNext(response);
                observer.onCompleted(response);
            }, function(errorResponse)  {
                observer.onError(errorResponse);
            });
        })
    }});

    Object.defineProperty(AuthManagerApi.prototype,"reset",{writable:true,configurable:true,value:function(requestData) {
        return Rx.Observable.create(function(observer)  {
            AuthService.reset(requestData).subscribe(function(response)  {
                observer.onNext(response);
                observer.onCompleted(response);
            }, function(errorResponse)  {
                observer.onError(errorResponse);
            });
        })
    }});

    Object.defineProperty(AuthManagerApi.prototype,"isAuthenticated",{writable:true,configurable:true,value:function() {
        return Session.isAuthenticated();
    }});

    Object.defineProperty(AuthManagerApi.prototype,"isAuthorized",{writable:true,configurable:true,value:function(permission) {
        return Session.isAuthorized(permission);
    }});

    Object.defineProperty(AuthManagerApi.prototype,"createSession",{writable:true,configurable:true,value:function(authResponse) {
        var session = {
            token: authResponse.token||authResponse.id,
            id: authResponse.userId||authResponse.id,
            roles: authResponse.roles,
            permissions: authResponse.permissions,
            landingPage: authResponse.landingPage
        };

        lscache.set('session', session);
        this.registerHeaders(session.token, session.id);
        Session.create(session);
    }});

    Object.defineProperty(AuthManagerApi.prototype,"registerHeaders",{writable:true,configurable:true,value:function(token, id) {
        $.ajaxSetup({
            headers: {
                'ecommerce-security-token': token,
                'ecommerce-security-user': id
            }
        });
    }});

    Object.defineProperty(AuthManagerApi.prototype,"clearHeaders",{writable:true,configurable:true,value:function() {
        $.ajaxSetup({
            headers: { }
        });
    }});


var AuthManager = new AuthManagerApi();

module.exports = AuthManager;