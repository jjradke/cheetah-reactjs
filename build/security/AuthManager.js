'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var _FacebookManager = require('./FacebookManager');

var _FacebookManager2 = _interopRequireDefault(_FacebookManager);

var _LinkedinManager = require('./LinkedinManager');

var _LinkedinManager2 = _interopRequireDefault(_LinkedinManager);

var _AuthService = require('./AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var AuthManagerApi = (function () {
    function AuthManagerApi() {
        var _this = this;

        _classCallCheck(this, AuthManagerApi);

        this.register = function (userInformation) {
            return _rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].register(userInformation).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted();
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        };

        this.login = function (credentials) {
            if (!!credentials.provider) {
                if (credentials.provider == 'facebook') {
                    return _rx2['default'].Observable.create(function (observer) {
                        _FacebookManager2['default'].login().subscribe(function (facebookResponse) {
                            _AuthService2['default'].externalLogin(facebookResponse).subscribe(function (apiResponse) {
                                _this.createSession(apiResponse);
                                observer.onNext(apiResponse);
                                observer.onCompleted();
                            });
                        });
                    });
                } else if (credentials.provider == 'linkedin') {
                    return _rx2['default'].Observable.create(function (observer) {
                        _LinkedinManager2['default'].login().subscribe(function (linkedinResponse) {
                            _AuthService2['default'].externalLogin(linkedinResponse).subscribe(function (apiResponse) {
                                _this.createSession(apiResponse);
                                observer.onNext(apiResponse);
                                observer.onCompleted();
                            });
                        });
                    });
                }
            } else {
                return _rx2['default'].Observable.create(function (observer) {
                    return _AuthService2['default'].login(credentials).subscribe(function (response) {
                        _this.createSession(response);
                        observer.onNext(response);
                        observer.onCompleted();
                    }, function (errorResponse) {
                        observer.onError(errorResponse);
                    });
                });
            }
        };

        this.bootstrapped = false;
    }

    _createClass(AuthManagerApi, [{
        key: 'setBootstrapped',
        value: function setBootstrapped(bootstrapped) {
            this.bootstrapped = bootstrapped;
        }
    }, {
        key: 'isBootstrapped',
        value: function isBootstrapped() {
            return this.bootstrapped;
        }
    }, {
        key: 'getUserId',
        value: function getUserId() {
            return _Session2['default'].id;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return _Session2['default'].name;
        }
    }, {
        key: 'confirm',
        value: function confirm(data) {
            return _rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].confirm(data).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted();
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'logout',
        value: function logout(clientOnly) {
            return _rx2['default'].Observable.create(function (observer) {
                if (!clientOnly) {
                    _AuthService2['default'].logout().subscribe(function (response) {
                        _Session2['default'].destroy();
                        observer.onNext(response);
                        observer.onCompleted();
                    }, function (errorResponse) {
                        console.log(errorResponse);
                        if (errorResponse.status == 401 || errorResponse.status == 403 || errorResponse.status == 0) {
                            _Session2['default'].destroy();
                            observer.onNext(null);
                            observer.onCompleted();
                        } else {
                            observer.onError(errorResponse);
                        }
                    });
                } else {
                    _Session2['default'].destroy();
                    observer.onNext(null);
                    observer.onCompleted();
                }
            });
        }
    }, {
        key: 'forgot',
        value: function forgot(requestData) {
            return _rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].forgot(requestData).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted(response);
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset(requestData) {
            return _rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].reset(requestData).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted(response);
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return _Session2['default'].isAuthenticated();
        }
    }, {
        key: 'isAuthorized',
        value: function isAuthorized(permission) {
            return _Session2['default'].isAuthorized(permission);
        }
    }, {
        key: 'createSession',
        value: function createSession(authResponse) {
            var session = {
                token: authResponse.token || authResponse.id,
                id: authResponse.userId || authResponse.id,
                roles: authResponse.roles,
                permissions: authResponse.permissions,
                landingPage: authResponse.landingPage,
                name: authResponse.name
            };

            _Session2['default'].create(session);
        }
    }]);

    return AuthManagerApi;
})();

var AuthManager = new AuthManagerApi();

module.exports = AuthManager;