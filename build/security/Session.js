'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RestService = require('../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionApi = function () {
    function SessionApi() {
        _classCallCheck(this, SessionApi);

        this.id = null;
        this.name = null;
        this.token = null;
        this.roles = [];
        this.permissions = [];
        this.landingPage = null;
    }

    _createClass(SessionApi, [{
        key: 'create',
        value: function create(session) {
            for (var key in session) {
                this[key] = session[key];
            }
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return this.id != null && this.token != null;
        }
    }, {
        key: 'isAuthorized',
        value: function isAuthorized(permission) {
            return this.permissions.indexOf(permission) > -1;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.id = null;
            this.token = null;
            this.roles = [];
            this.permissions = [];
            this.landingPage = null;
            this.name = null;
        }
    }]);

    return SessionApi;
}();

var Session = new SessionApi();

module.exports = Session;