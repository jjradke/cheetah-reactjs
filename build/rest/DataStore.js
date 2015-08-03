'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _RestService = require('./RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var DataStoreApi = (function () {
    function DataStoreApi() {
        _classCallCheck(this, DataStoreApi);

        this.map = {};
        this.indexMap = {};
        this.totalMap = {};
    }

    _createClass(DataStoreApi, [{
        key: 'add',
        value: function add(key, data) {
            this.map[key] = data;
        }
    }, {
        key: 'total',
        value: function total(key) {
            return this.totalMap[key];
        }
    }, {
        key: 'size',
        value: function size(key) {
            return this.map[key] == null ? 0 : this.map[key].length;
        }
    }, {
        key: 'get',
        value: function get(key, params, isSearch) {
            var _this = this;

            return _rx2['default'].Observable.create(function (observer) {
                if (_this.map[key] != null && !isSearch) {
                    observer.onNext(_this.map[key]);
                    observer.onCompleted();
                } else {
                    _RestService2['default'].get(key, params).subscribe(function (result) {
                        if (result.total && result.total > 0) {
                            _this.totalMap[key] = result.total;
                        }
                        _this.add(key, result.data);

                        observer.onNext(result.data);
                        observer.onCompleted();
                    }, function (errorResult) {
                        if (errorResult.status != 500) {
                            _securityAuthManager2['default'].logout(true).subscribe(function (response) {
                                observer.onError(errorResult);
                            });
                        }
                    });
                }
            });
        }
    }, {
        key: 'getByOffset',
        value: function getByOffset(key, params) {
            var _this2 = this;

            var offset = params._offset,
                size = params._size;
            return _rx2['default'].Observable.create(function (observer) {
                if (_this2.map[key] != null && _this2.map[key].length >= offset && _this2.map[key][offset] != null) {
                    observer.onNext(_this2.map[key].filter(function (item, index) {
                        return index >= offset && index < offset + size;
                    }));
                    observer.onCompleted();
                } else {
                    _RestService2['default'].get(key, params).subscribe(function (result) {
                        if (result.total && result.total > 0) {
                            _this2.totalMap[key] = result.total;
                        }
                        if (_this2.map[key] == null) {
                            _this2.map[key] = [];
                        }

                        if (_this2.map[key].length == offset) {
                            result.data.forEach(function (item) {
                                _this2.map[key].push(item);
                            });
                        } else if (_this2.map[key].length < offset) {
                            while (_this2.map[key].length < offset) {
                                _this2.map[key].push(null);
                            }

                            result.data.forEach(function (item) {
                                _this2.map[key].push(item);
                            });
                        } else {
                            result.data.forEach(function (item, index) {
                                index = offset + index;
                                if (index == _this2.map[key].length) {
                                    _this2.map[key].push(item);
                                } else if (index < _this2.map[key].length) {
                                    _this2.map[key][index] = item;
                                }
                            });
                        }
                        observer.onNext(result.data);
                        observer.onCompleted();
                    }, function (errorResult) {
                        if (errorResult.status != 500) {
                            _securityAuthManager2['default'].logout(true).subscribe(function (response) {
                                observer.onError(errorResult);
                            });
                        }
                    });
                }
            });
        }
    }, {
        key: 'getById',
        value: function getById(key, id) {
            var _this3 = this;

            return _rx2['default'].Observable.create(function (observer) {
                var result = _this3.map[key] != null ? _this3.map[key].filter(function (item) {
                    if (typeof id === 'string' || typeof id === 'number') {
                        return item.Id == id;
                    } else if (typeof id === 'object') {
                        return item[id.Key] == id.Value;
                    }
                    return null;
                }) : [];
                if (result.length == 0) {
                    if (typeof id === 'object') {
                        id = id.Value;
                    }
                    _RestService2['default'].find(key, id).subscribe(function (result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    }, function (errorResult) {
                        observer.onError(errorResult);
                    });
                } else {
                    observer.onNext(result[0]);
                    observer.onCompleted();
                }
            });
        }
    }, {
        key: 'getByIndex',
        value: function getByIndex(key, id) {
            var _this4 = this;

            var index = this.indexMap[key];

            return _rx2['default'].Observable.create(function (observer) {
                if (_this4.map[key] != null && _this4.map[key].length > index) {
                    console.log('retrieved from cache!');
                    observer.onNext(_this4.map[key][_this4.indexMap[key]]);
                    observer.onCompleted();
                } else {
                    _this4.getById(key, id).subscribe(function (data) {
                        if (!(data instanceof Array)) data = [data];
                        _this4.add(key, data);

                        for (var index = 0; index < data.length; index++) {
                            var row = data[index];
                            if (row.Id == id) {
                                _this4.indexMap[key] = index;
                                break;
                            }
                        }

                        observer.onNext(_this4.map[key][_this4.indexMap[key]]);
                        observer.onCompleted();
                    });
                }
            });
        }
    }, {
        key: 'addIndex',
        value: function addIndex(key, index) {
            this.indexMap[key] = index;
        }
    }, {
        key: 'getIndex',
        value: function getIndex(key) {
            return this.indexMap[key];
        }
    }, {
        key: 'previous',
        value: function previous(key) {
            if (this.hasPrevious(key)) {
                this.indexMap[key] = this.indexMap[key] - 1;
            }
        }
    }, {
        key: 'next',
        value: function next(key) {
            if (this.hasNext(key)) {
                this.indexMap[key] = this.indexMap[key] + 1;
            }
        }
    }, {
        key: 'hasPrevious',
        value: function hasPrevious(key) {
            return this.indexMap[key] != null && this.indexMap[key] > 0;
        }
    }, {
        key: 'hasNext',
        value: function hasNext(key) {
            var currentIndex = this.indexMap[key];
            return currentIndex != null && currentIndex < this.map[key].length - 1;
        }
    }]);

    return DataStoreApi;
})();

var DataStore = new DataStoreApi();

module.exports = DataStore;