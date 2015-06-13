'use strict';

import Rx from 'Rx';
import ApplicationConfig from '../config/ApplicationConfig';
import Session from './Session';


    function AuthServiceApi() {

    }

    Object.defineProperty(AuthServiceApi.prototype,"register",{writable:true,configurable:true,value:function(userInformation) {
        return Rx.Observable.create(function(observer)  {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/Register',
                type: 'POST',
                data: userInformation,
                success: function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: function(errorResult)  {
                    observer.onError(errorResult);
                }
            })
        })
    }});

    Object.defineProperty(AuthServiceApi.prototype,"confirm",{writable:true,configurable:true,value:function(data) {
        return Rx.Observable.create(function(observer)  {
           $.ajax({
               url: ApplicationConfig.apiBasePath + '/api/Account/ConfirmEmail',
               type: 'POST',
               data: data,
               success: function(result)  {
                   observer.onNext(result);
                   observer.onCompleted();
               },
               error: function(errorResult)  {
                   observer.onError(errorResult);
               }
           })
        });
    }});

    Object.defineProperty(AuthServiceApi.prototype,"login",{writable:true,configurable:true,value:function(credentials) {
        return Rx.Observable.create(function(observer)  {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/Login',
                type: 'POST',
                data: credentials,
                success: function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: function(result)  {
                    observer.onError(result);
                }
            })
        });
    }});

    Object.defineProperty(AuthServiceApi.prototype,"logout",{writable:true,configurable:true,value:function() {
        return Rx.Observable.create(function(observer)  {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/Logout',
                type: 'POST',
                success: function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: function(result)  {
                    observer.onError(result);
                }
            })
        });
    }});

    Object.defineProperty(AuthServiceApi.prototype,"forgot",{writable:true,configurable:true,value:function(requestData) {
        return Rx.Observable.create(function(observer)  {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/ForgotPassword',
                type: 'POST',
                data: requestData,
                success: function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: function(result)  {
                    observer.onError(result);
                }
            });
        });
    }});

    Object.defineProperty(AuthServiceApi.prototype,"reset",{writable:true,configurable:true,value:function(requestData) {
        return Rx.Observable.create(function(observer)  {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/ResetPassword',
                type: 'POST',
                data: requestData,
                success: function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: function(result)  {
                    observer.onError(result);
                }
            });
        });
    }});

    Object.defineProperty(AuthServiceApi.prototype,"externalLogin",{writable:true,configurable:true,value:function(request) {
        return Rx.Observable.create(function(observer)  {
            $.ajax({
                url: ApplicationConfig.apiBasePath + '/api/Account/ExternalLogin',
                type: 'POST',
                data: request,
                success: function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                },
                error: function(result)  {
                    observer.onError(result);
                }
            })
        });
    }});



var AuthService = new AuthServiceApi();

module.exports = AuthService;