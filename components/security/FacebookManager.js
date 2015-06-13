'use strict';

import Rx from 'Rx';

class FacebookManagerApi {
    constructor() {
        this.permissions = 'email,public_profile';
        this.status = null;
    }

    isAuthenticated() {
        return Rx.Observable.create((observer) => {
            if (this.status != null) {
                observer.onNext(this.status);
                observer.onCompleted();
            } else {
                FB.getLoginStatus((response) => {
                    this.status = response.status;
                    observer.onNext(this.status);
                    observer.onCompleted();
                });
            }
        });
    }

    login() {
        return Rx.Observable.create((observer) => {
            FB.login((facebookLoginResponse) => {
                console.log(facebookLoginResponse);
                FB.api('/me', (facebookApiResponse) => {
                    var response = {
                        Email: facebookApiResponse.email,
                        FirstName: facebookApiResponse.first_name,
                        LastName: facebookApiResponse.last_name,
                        Id: facebookLoginResponse.authResponse.userID,
                        SignedRequest: facebookLoginResponse.authResponse.signedRequest,
                        Provider: 'Facebook'
                    };

                    observer.onNext(response);
                    observer.onCompleted();
                });
            }, { scope: this.permissions });
        });
    }
}

var FacebookManager = new FacebookManagerApi();

module.exports = FacebookManager;