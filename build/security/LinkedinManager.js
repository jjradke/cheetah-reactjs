'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var LinkedinManagerApi = (function () {
    function LinkedinManagerApi() {
        _classCallCheck(this, LinkedinManagerApi);
    }

    _createClass(LinkedinManagerApi, [{
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return _rx2['default'].Observable.create(function (observer) {
                IN.API.Raw('/people/~').result(function () {
                    observer.onNext(true);
                    observer.onCompleted();
                }).error(function () {
                    observer.onNext(false);
                    observer.onCompleted();
                });
            });
        }
    }, {
        key: 'login',
        value: function login() {
            var _this = this;

            return _rx2['default'].Observable.create(function (observer) {
                IN.User.authorize(function () {
                    IN.API.Profile("me").fields("first-name", "last-name", "email-address").result(function (data) {
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
                }, _this);
            });
        }
    }]);

    return LinkedinManagerApi;
})();

var LinkedinManager = new LinkedinManagerApi();

module.exports = LinkedinManager;