'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Rx = require('Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var _FacebookManager = require('./FacebookManager');

var _FacebookManager2 = _interopRequireDefault(_FacebookManager);

var _LinkedinManager = require('./LinkedinManager');

var _LinkedinManager2 = _interopRequireDefault(_LinkedinManager);

var _AuthService = require('./AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _lscache = require('lscache');

var _lscache2 = _interopRequireDefault(_lscache);

var AuthManagerApi = (function () {
    function AuthManagerApi() {
        _classCallCheck(this, AuthManagerApi);

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);

        if (_lscache2['default'].get('session') != null) {
            this.createSession(_lscache2['default'].get('session'));
        }
    }

    _createClass(AuthManagerApi, [{
        key: 'getUserId',
        value: function getUserId() {
            return _Session2['default'].id;
        }
    }, {
        key: 'register',
        value: function register(userInformation) {
            return _Rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].register(userInformation).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted();
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(data) {
            return _Rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].confirm(data).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted();
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            var _this = this;

            if (!!credentials.provider) {
                if (credentials.provider == 'facebook') {
                    return _Rx2['default'].Observable.create(function (observer) {
                        _FacebookManager2['default'].login().subscribe(function (facebookResponse) {
                            _AuthService2['default'].externalLogin(facebookResponse).subscribe(function (apiResponse) {
                                console.log(apiResponse);
                                _this.createSession(apiResponse);
                                observer.onNext(apiResponse);
                                observer.onCompleted();
                            });
                        });
                    });
                } else if (credentials.provider == 'linkedin') {
                    return _Rx2['default'].Observable.create(function (observer) {
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
                return _Rx2['default'].Observable.create(function (observer) {
                    return _AuthService2['default'].login(credentials).subscribe(function (response) {
                        _this.createSession(response);
                        observer.onNext(response);
                        observer.onCompleted();
                    }, function (errorResponse) {
                        observer.onError(errorResponse);
                    });
                });
            }
        }
    }, {
        key: 'logout',
        value: function logout(clientOnly) {
            var _this2 = this;

            return _Rx2['default'].Observable.create(function (observer) {
                if (!clientOnly) {
                    _AuthService2['default'].logout().subscribe(function (response) {
                        _lscache2['default'].remove('session');
                        _this2.clearHeaders();
                        _Session2['default'].destroy();
                        observer.onNext(response);
                        observer.onCompleted();
                    }, function (errorResponse) {
                        if (errorResponse.status == 401) {
                            _lscache2['default'].remove('session');
                            _this2.clearHeaders();
                            _Session2['default'].destroy();
                            observer.onNext(null);
                            observer.onCompleted();
                        } else {
                            observer.onError(errorResponse);
                        }
                    });
                } else {
                    _lscache2['default'].remove('session');
                    _this2.clearHeaders();
                    _Session2['default'].destroy();
                    observer.onNext(null);
                    observer.onCompleted();
                }
            });
        }
    }, {
        key: 'forgot',
        value: function forgot(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
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
            return _Rx2['default'].Observable.create(function (observer) {
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
                landingPage: authResponse.landingPage
            };

            _lscache2['default'].set('session', session);
            this.registerHeaders(session.token, session.id);
            _Session2['default'].create(session);
        }
    }, {
        key: 'registerHeaders',
        value: function registerHeaders(token, id) {
            $.ajaxSetup({
                headers: {
                    'ecommerce-security-token': token,
                    'ecommerce-security-user': id
                }
            });
        }
    }, {
        key: 'clearHeaders',
        value: function clearHeaders() {
            $.ajaxSetup({
                headers: {}
            });
        }
    }]);

    return AuthManagerApi;
})();

var AuthManager = new AuthManagerApi();

module.exports = AuthManager;