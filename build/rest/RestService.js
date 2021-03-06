'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ApplicationConfig = require('../config/ApplicationConfig');

var _ApplicationConfig2 = _interopRequireDefault(_ApplicationConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RestServiceApi = function () {
  function RestServiceApi() {
    _classCallCheck(this, RestServiceApi);

    this.baseUrl = _ApplicationConfig2.default.apiBasePath + '/api/';
  }

  _createClass(RestServiceApi, [{
    key: 'get',
    value: function get(resourceName, addl) {
      var url = this.baseUrl + resourceName;
      if (typeof addl === 'string') url += addl != '' ? '/' + addl : '';

      var data = {};
      if ((typeof addl === 'undefined' ? 'undefined' : _typeof(addl)) === 'object') data = addl;

      return _rx2.default.Observable.create(function (observer) {
        _jquery2.default.get(url, data, function (result) {
          observer.onNext(result);
          observer.onCompleted();
        }).fail(function (error) {
          observer.onError(error);
        });
      });
    }
  }, {
    key: 'find',
    value: function find(resourceName, id) {
      var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
      return _rx2.default.Observable.create(function (observer) {
        _jquery2.default.get(url, function (result) {
          observer.onNext(result.data);
          observer.onCompleted();
        }).fail(function (error) {
          observer.onError(error);
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(resourceName, id) {
      var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
      return _rx2.default.Observable.create(function (observer) {
        _jquery2.default.ajax({
          url: url,
          type: 'DELETE',
          success: function success(result) {
            observer.onNext(result);
            observer.onCompleted();
          },
          error: function error(_error) {
            observer.onError(_error);
          }
        });
      });
    }
  }, {
    key: 'update',
    value: function update(resourceName, id, params) {
      if (arguments.length == 2) {
        params = id;
        id = null;
      }
      var url = this.baseUrl + resourceName + (id != null ? '/' + encodeURIComponent(id) : '');
      return _rx2.default.Observable.create(function (observer) {
        _jquery2.default.ajax({
          url: url,
          type: 'PUT',
          data: JSON.stringify(params),
          contentType: 'application/json',
          success: function success(result) {
            observer.onNext(result);
            observer.onCompleted();
          },
          error: function error(_error2) {
            observer.onError(_error2);
          }
        });
      });
    }
  }, {
    key: 'create',
    value: function create(resourceName, params) {
      var url = this.baseUrl + resourceName;
      return _rx2.default.Observable.create(function (observer) {
        _jquery2.default.ajax({
          url: url,
          type: 'POST',
          data: JSON.stringify(params),
          contentType: 'application/json',
          success: function success(result) {
            observer.onNext(result);
            observer.onCompleted();
          },
          error: function error(_error3) {
            observer.onError(_error3);
          }
        });
      });
    }
  }]);

  return RestServiceApi;
}();

var RestService = new RestServiceApi();

module.exports = RestService;