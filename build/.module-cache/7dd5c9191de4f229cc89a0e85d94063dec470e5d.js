'use strict';

import RestService from '../rest/RestService';
import Session from './Session';


    function LinkedinManagerApi() {

    }

    Object.defineProperty(LinkedinManagerApi.prototype,"isAuthenticated",{writable:true,configurable:true,value:function() {
        return Rx.Observable.create(function(observer)  {
            IN.API.Raw('/people/~').result(function()  {
                observer.onNext(true);
                observer.onCompleted();
            }).error(function()  {
                observer.onNext(false);
                observer.onCompleted();
            });
        });
    }});

    Object.defineProperty(LinkedinManagerApi.prototype,"login",{writable:true,configurable:true,value:function() {
        return Rx.Observable.create(function(observer)  {
            IN.User.authorize(function()  {
                IN.API.Profile("me").fields("first-name", "last-name", "email-address").result(function(data)  {
                    data = data.values[0];

                    var response = {
                        FirstName: data['firstName'],
                        LastName: data['lastName'],
                        Email: data['emailAddress'],
                        Id: IN.User.getMemberId(),
                        Provider: 'LinkedIn'
                    };

                    observer.onNext(response);
                    observer.onCompleted();
                });
            }, this);
        }.bind(this));
    }});



var LinkedinManager = new LinkedinManagerApi();

module.exports = LinkedinManager;