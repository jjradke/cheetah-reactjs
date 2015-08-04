'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var ConfirmEmailPage = (function (_React$Component) {
    _inherits(ConfirmEmailPage, _React$Component);

    function ConfirmEmailPage(props) {
        _classCallCheck(this, ConfirmEmailPage);

        _get(Object.getPrototypeOf(ConfirmEmailPage.prototype), 'constructor', this).call(this, props);
        this.state = {
            confirmed: false,
            failed: false
        };
    }

    _createClass(ConfirmEmailPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            _securityAuthManager2['default'].confirm({ email: this.props.email, code: this.props.code }).subscribe(function (response) {
                _this.state.confirmed = true;
                _this.setState(_this.state);
            }, function (errorResponse) {
                _this.state.failed = true;
                _this.setState(_this.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var message;
            if (this.state.confirmed) {
                message = _react2['default'].createElement(
                    'div',
                    null,
                    'Your email address has been successfully confirmed.',
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: 'login' },
                        'Click here to log in.'
                    )
                );
            } else if (this.state.failed) {
                message = _react2['default'].createElement(
                    'div',
                    null,
                    'Something went wrong.'
                );
            } else {
                message = _react2['default'].createElement(
                    'div',
                    null,
                    'Confirming...'
                );
            }
            return _react2['default'].createElement(
                'div',
                { 'class': 'row' },
                _react2['default'].createElement(
                    'div',
                    { 'class': 'col-md-8' },
                    _react2['default'].createElement(
                        'section',
                        null,
                        _react2['default'].createElement(
                            'h4',
                            null,
                            'Confirmation'
                        ),
                        _react2['default'].createElement('hr', null),
                        message
                    )
                )
            );
        }
    }]);

    return ConfirmEmailPage;
})(_react2['default'].Component);

ConfirmEmailPage.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = ConfirmEmailPage;