'use strict';

import React from 'react';
import Rx from 'rx';
import Session from './Session';
import FacebookManager from './FacebookManager';
import LinkedinManager from './LinkedinManager';
import AuthService from './AuthService';
import cookie from 'react-cookie';

class AuthManagerApi {
    constructor() {
        this.bootstrapped = false;
    }

    setBootstrapped(bootstrapped) {
        this.bootstrapped = bootstrapped;
    }

    isBootstrapped() {
        return this.bootstrapped;
    }

    getUserId() {
        return Session.id;
    }

    getName() {
        return Session.name;
    }

    register = (userInformation) => {
        return Rx.Observable.create((observer) => {
           AuthService.register(userInformation).subscribe((response) => {
               observer.onNext(response);
               observer.onCompleted();
           }, (errorResponse) => {
               observer.onError(errorResponse);
           });
        });
    };

    confirm(data) {
        return Rx.Observable.create((observer) => {
            AuthService.confirm(data).subscribe((response) => {
                observer.onNext(response);
                observer.onCompleted();
            }, (errorResponse) => {
                observer.onError(errorResponse);
            });
        });
    }

    login = (credentials) => {
        if (!!credentials.provider) {
           if (credentials.provider == 'facebook') {
               return Rx.Observable.create((observer) => {
                   FacebookManager.login().subscribe((facebookResponse) => {
                       AuthService.externalLogin(facebookResponse).subscribe((apiResponse) => {
                           this.createSession(apiResponse);
                           observer.onNext(apiResponse);
                           observer.onCompleted();
                       });
                   });
               });
           } else if (credentials.provider == 'linkedin') {
               return Rx.Observable.create((observer) => {
                   LinkedinManager.login().subscribe((linkedinResponse) => {
                       AuthService.externalLogin(linkedinResponse).subscribe((apiResponse) => {
                           this.createSession(apiResponse);
                           observer.onNext(apiResponse);
                           observer.onCompleted();
                       });
                   });
               });
           }
        } else {
            return Rx.Observable.create((observer) => {
                return AuthService.login(credentials).subscribe((response) => {
                    this.createSession(response);
                    observer.onNext(response);
                    observer.onCompleted();
                }, (errorResponse) => {
                    observer.onError(errorResponse);
                });
            });
        }
    };

    logout(clientOnly) {
       return Rx.Observable.create((observer) => {
           if (!clientOnly) {
               AuthService.logout().subscribe((response) => {
                   Session.destroy();
                   observer.onNext(response);
                   observer.onCompleted();
               }, (errorResponse) => {
                   console.log(errorResponse);
                   if (errorResponse.status == 401
                            || errorResponse.status == 403
                            || errorResponse.status == 0) {
                       Session.destroy();
                       observer.onNext(null);
                       observer.onCompleted();
                   } else {
                       observer.onError(errorResponse);
                   }
               });
           } else {
               Session.destroy();
               observer.onNext(null);
               observer.onCompleted();
           }
       });
    }

    forgot(requestData) {
        return Rx.Observable.create((observer) => {
            AuthService.forgot(requestData).subscribe((response) => {
                observer.onNext(response);
                observer.onCompleted(response);
            }, (errorResponse) => {
                observer.onError(errorResponse);
            });
        })
    }

    reset(requestData) {
        return Rx.Observable.create((observer) => {
            AuthService.reset(requestData).subscribe((response) => {
                observer.onNext(response);
                observer.onCompleted(response);
            }, (errorResponse) => {
                observer.onError(errorResponse);
            });
        })
    }

    isAuthenticated() {
        return Session.isAuthenticated();
    }

    isAuthorized(permission) {
        return Session.isAuthorized(permission);
    }

    createSession(authResponse) {
        var session = {
            token: authResponse.token||authResponse.id,
            id: authResponse.userId||authResponse.id,
            roles: authResponse.roles,
            permissions: authResponse.permissions,
            landingPage: authResponse.landingPage,
            name: authResponse.name
        };

        Session.create(session);
    }
}

var AuthManager = new AuthManagerApi();

module.exports = AuthManager;