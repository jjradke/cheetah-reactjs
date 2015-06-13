'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Rx = require('Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _configApplicationConfig = require('../config/ApplicationConfig');

var _configApplicationConfig2 = _interopRequireDefault(_configApplicationConfig);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var AuthServiceApi = (function () {
    function AuthServiceApi() {
        _classCallCheck(this, AuthServiceApi);
    }

    _createClass(AuthServiceApi, [{
        key: 'register',
        value: function register(userInformation) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/Register',
                    type: 'POST',
                    data: userInformation,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(errorResult) {
                        observer.onError(errorResult);
                    }
                });
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(data) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ConfirmEmail',
                    type: 'POST',
                    data: data,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(errorResult) {
                        observer.onError(errorResult);
                    }
                });
            });
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/Login',
                    type: 'POST',
                    data: credentials,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'logout',
        value: function logout() {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/Logout',
                    type: 'POST',
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'forgot',
        value: function forgot(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ForgotPassword',
                    type: 'POST',
                    data: requestData,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ResetPassword',
                    type: 'POST',
                    data: requestData,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'externalLogin',
        value: function externalLogin(request) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ExternalLogin',
                    type: 'POST',
                    data: request,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }]);

    return AuthServiceApi;
})();

var AuthService = new AuthServiceApi();

module.exports = AuthService;