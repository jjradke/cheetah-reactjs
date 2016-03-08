'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _DataStore = require('../rest/DataStore');

var _DataStore2 = _interopRequireDefault(_DataStore);

var _RestService = require('../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailHeader = function (_React$Component) {
    _inherits(DetailHeader, _React$Component);

    function DetailHeader(props) {
        _classCallCheck(this, DetailHeader);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailHeader).call(this, props));

        _this.state = { data: { item: {} } };
        _this.next = _this.next.bind(_this);
        _this.previous = _this.previous.bind(_this);
        _this.hasNext = _this.hasNext.bind(_this);
        _this.hasPrevious = _this.hasPrevious.bind(_this);
        _this.back = _this.back.bind(_this);
        _this.delete = _this.delete.bind(_this);
        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(DetailHeader, [{
        key: 'previous',
        value: function previous() {
            var _this2 = this;

            _DataStore2.default.previous(this.props.resourceName);
            _DataStore2.default.getByIndex(this.props.resourceName).subscribe(function (data) {
                _this2.context.router.transitionTo(_this2.getRouteName(_this2.props.resourceName), { id: encodeURIComponent(data.Id) });
            });
        }
    }, {
        key: 'next',
        value: function next() {
            var _this3 = this;

            _DataStore2.default.next(this.props.resourceName);
            _DataStore2.default.getByIndex(this.props.resourceName).subscribe(function (data) {
                _this3.context.router.transitionTo(_this3.getRouteName(_this3.props.resourceName), { id: encodeURIComponent(data.Id) });
            });
        }
    }, {
        key: 'hasPrevious',
        value: function hasPrevious() {
            return _DataStore2.default.hasPrevious(this.props.resourceName);
        }
    }, {
        key: 'hasNext',
        value: function hasNext() {
            return _DataStore2.default.hasNext(this.props.resourceName);
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

            _RestService2.default.update(this.props.resourceName, this.props.data.Id, this.props.data).subscribe(function (result) {
                console.log(result);
            });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var _this4 = this;

            _RestService2.default.delete(this.props.resourceName, this.props.data.Id).subscribe(function (result) {
                _this4.context.router.transitionTo(_this4.props.resourceName);
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
            return _react2.default.createElement(
                'article',
                { className: 'secondary-nav' },
                _react2.default.createElement(
                    'div',
                    { className: 'text-right' },
                    this.hasPrevious() ? _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm hidden-xs', onClick: this.previous },
                        ' ◂Previous'
                    ) : null,
                    this.hasNext() ? _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm hidden-xs', onClick: this.next },
                        'Next ▸'
                    ) : null,
                    _react2.default.createElement(
                        'a',
                        { className: 'btn btn-sm btn-default', onClick: this.back },
                        'Back to Search Results'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-default', onClick: this.update },
                        'Save'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-default', onClick: this.delete },
                        'Delete'
                    )
                )
            );
        }
    }]);

    return DetailHeader;
}(_react2.default.Component);

DetailHeader.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = DetailHeader;