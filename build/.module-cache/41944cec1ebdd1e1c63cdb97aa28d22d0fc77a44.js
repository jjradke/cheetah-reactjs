'use strict';

import Rx from 'Rx';


    function FacebookManagerApi() {
        this.permissions = 'email,public_profile';
        this.status = null;
    }

    Object.defineProperty(FacebookManagerApi.prototype,"isAuthenticated",{writable:true,configurable:true,value:function() {
        return Rx.Observable.create(function(observer)  {
            if (this.status != null) {
                observer.onNext(this.status);
                observer.onCompleted();
            } else {
                FB.getLoginStatus(function(response)  {
                    this.status = response.status;
                    observer.onNext(this.status);
                    observer.onCompleted();
                }.bind(this));
            }
        }.bind(this));
    }});

    Object.defineProperty(FacebookManagerApi.prototype,"login",{writable:true,configurable:true,value:function() {
        return Rx.Observable.create(function(observer)  {
            FB.login(function(facebookLoginResponse)  {
                console.log(facebookLoginResponse);
                FB.api('/me', function(facebookApiResponse)  {
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
        }.bind(this));
    }});


var FacebookManager = new FacebookManagerApi();

module.exports = FacebookManager;