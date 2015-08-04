'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _restDataStore = require('../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _reactClassHelper = require('react-class-helper');

var DetailHeader = (function (_React$Component) {
    _inherits(DetailHeader, _React$Component);

    function DetailHeader(props) {
        _classCallCheck(this, DetailHeader);

        _get(Object.getPrototypeOf(DetailHeader.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.hasNext = this.hasNext.bind(this);
        this.hasPrevious = this.hasPrevious.bind(this);
        this.back = this.back.bind(this);
        this['delete'] = this['delete'].bind(this);
        this.update = this.update.bind(this);
    }

    _createClass(DetailHeader, [{
        key: 'previous',
        value: function previous() {
            var _this = this;

            _restDataStore2['default'].previous(this.props.resourceName);
            _restDataStore2['default'].getByIndex(this.props.resourceName).subscribe(function (data) {
                _this.context.router.transitionTo(_this.getRouteName(_this.props.resourceName), { id: encodeURIComponent(data.Id) });
            });
        }
    }, {
        key: 'next',
        value: function next() {
            var _this2 = this;

            _restDataStore2['default'].next(this.props.resourceName);
            _restDataStore2['default'].getByIndex(this.props.resourceName).subscribe(function (data) {
                _this2.context.router.transitionTo(_this2.getRouteName(_this2.props.resourceName), { id: encodeURIComponent(data.Id) });
            });
        }
    }, {
        key: 'hasPrevious',
        value: function hasPrevious() {
            return _restDataStore2['default'].hasPrevious(this.props.resourceName);
        }
    }, {
        key: 'hasNext',
        value: function hasNext() {
            return _restDataStore2['default'].hasNext(this.props.resourceName);
        }
    }, {
        key: 'back',
        value: function back() {
            this.context.router.transitionTo(this.props.resourceName);
        }
    }, {
        key: 'update',
        value: function update() {
            var data = this.props.update();

            _restRestService2['default'].update(this.props.resourceName, this.props.data.Id, this.props.data).subscribe(function (result) {
                console.log(result);
            });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var _this3 = this;

            _restRestService2['default']['delete'](this.props.resourceName, this.props.data.Id).subscribe(function (result) {
                _this3.context.router.transitionTo(_this3.props.resourceName);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getRouteName',
        value: function getRouteName(resourceName) {
            console.log(resourceName.substring(resourceName.length));
            if (resourceName.substring(resourceName.length - 3) != 'ies') {
                return this.props.resourceName.substring(0, this.props.resourceName.length - 1);
            } else {
                return this.props.resourceName.substring(0, this.props.resourceName.length - 3) + 'y';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'article',
                { className: 'secondary-nav' },
                _react2['default'].createElement(
                    'div',
                    { className: 'text-right' },
                    this.hasPrevious() ? _react2['default'].createElement(
                        'button',
                        { className: 'btn btn-sm hidden-xs', onClick: this.previous },
                        ' ◂Previous'
                    ) : null,
                    this.hasNext() ? _react2['default'].createElement(
                        'button',
                        { className: 'btn btn-sm hidden-xs', onClick: this.next },
                        'Next ▸'
                    ) : null,
                    _react2['default'].createElement(
                        'a',
                        { className: 'btn btn-sm btn-default', onClick: this.back },
                        'Back to Search Results'
                    ),
                    _react2['default'].createElement(
                        'button',
                        { className: 'btn btn-sm btn-default', onClick: this.update },
                        'Save'
                    ),
                    _react2['default'].createElement(
                        'button',
                        { className: 'btn btn-sm btn-default', onClick: this['delete'] },
                        'Delete'
                    )
                )
            );
        }
    }]);

    return DetailHeader;
})(_react2['default'].Component);

DetailHeader.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = DetailHeader;