'use strict';

import Rx from 'Rx';
import ApplicationConfig from '../config/ApplicationConfig';
import Session from './Session';

class AuthServiceApi {
    constructor() {

    }

    register(userInformation) {
        return Rx.Observable.create((observer) => {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/Register',
                type: 'POST',
                data: userInformation,
                success: (result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: (errorResult) => {
                    observer.onError(errorResult);
                }
            })
        })
    }

    confirm(data) {
        return Rx.Observable.create((observer) => {
           $.ajax({
               url: ApplicationConfig.apiBasePath + '/api/Account/ConfirmEmail',
               type: 'POST',
               data: data,
               success: (result) => {
                   observer.onNext(result);
                   observer.onCompleted();
               },
               error: (errorResult) => {
                   observer.onError(errorResult);
               }
           })
        });
    }

    login(credentials) {
        return Rx.Observable.create((observer) => {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/Login',
                type: 'POST',
                data: credentials,
                success: (result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: (result) => {
                    observer.onError(result);
                }
            })
        });
    }

    logout() {
        return Rx.Observable.create((observer) => {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/Logout',
                type: 'POST',
                success: (result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: (result) => {
                    observer.onError(result);
                }
            })
        });
    }

    forgot(requestData) {
        return Rx.Observable.create((observer) => {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/ForgotPassword',
                type: 'POST',
                data: requestData,
                success: (result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: (result) => {
                    observer.onError(result);
                }
            });
        });
    }

    reset(requestData) {
        return Rx.Observable.create((observer) => {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/ResetPassword',
                type: 'POST',
                data: requestData,
                success: (result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: (result) => {
                    observer.onError(result);
                }
            });
        });
    }

    externalLogin(request) {
        return Rx.Observable.create((observer) => {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/ExternalLogin',
                type: 'POST',
                data: request,
                success: (result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: (result) => {
                    observer.onError(result);
                }
            })
        });
    }
}


var AuthService = new AuthServiceApi();

module.exports = AuthService;