'use strict';

import RestService from '../rest/RestService';
import Session from './Session';

class LinkedinManagerApi {
    constructor() {

    }

    isAuthenticated() {
        return Rx.Observable.create((observer) => {
            IN.API.Raw('/people/~').result(() => {
                observer.onNext(true);
                observer.onCompleted();
            }).error(() => {
                observer.onNext(false);
                observer.onCompleted();
            });
        });
    }

    login() {
        return Rx.Observable.create((observer) => {
            IN.User.authorize(() => {
                IN.API.Profile("me").fields("first-name", "last-name", "email-address").result((data) => {
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
        });
    }

}

var LinkedinManager = new LinkedinManagerApi();

module.exports = LinkedinManager;