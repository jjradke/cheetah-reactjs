'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var FacebookManagerApi = (function () {
    function FacebookManagerApi() {
        _classCallCheck(this, FacebookManagerApi);

        this.permissions = 'email,public_profile';
        this.status = null;
    }

    _createClass(FacebookManagerApi, [{
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            var _this = this;

            return _rx2['default'].Observable.create(function (observer) {
                if (_this.status != null) {
                    observer.onNext(_this.status);
                    observer.onCompleted();
                } else {
                    FB.getLoginStatus(function (response) {
                        _this.status = response.status;
                        observer.onNext(_this.status);
                        observer.onCompleted();
                    });
                }
            });
        }
    }, {
        key: 'login',
        value: function login() {
            var _this2 = this;

            return _rx2['default'].Observable.create(function (observer) {
                FB.login(function (facebookLoginResponse) {
                    FB.api('/me', function (facebookApiResponse) {
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
                }, { scope: _this2.permissions });
            });
        }
    }]);

    return FacebookManagerApi;
})();

var FacebookManager = new FacebookManagerApi();

module.exports = FacebookManager;