'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _AuthManager = require('../security/AuthManager');

var _AuthManager2 = _interopRequireDefault(_AuthManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmEmailPage = function (_React$Component) {
    _inherits(ConfirmEmailPage, _React$Component);

    function ConfirmEmailPage(props) {
        _classCallCheck(this, ConfirmEmailPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmEmailPage).call(this, props));

        _this.state = {
            confirmed: false,
            failed: false
        };
        return _this;
    }

    _createClass(ConfirmEmailPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _AuthManager2.default.confirm({ email: this.props.email, code: this.props.code }).subscribe(function (response) {
                _this2.state.confirmed = true;
                _this2.setState(_this2.state);
            }, function (errorResponse) {
                _this2.state.failed = true;
                _this2.setState(_this2.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var message;
            if (this.state.confirmed) {
                message = _react2.default.createElement(
                    'div',
                    null,
                    'Your email address has been successfully confirmed.',
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: 'login' },
                        'Click here to log in.'
                    )
                );
            } else if (this.state.failed) {
                message = _react2.default.createElement(
                    'div',
                    null,
                    'Something went wrong.'
                );
            } else {
                message = _react2.default.createElement(
                    'div',
                    null,
                    'Confirming...'
                );
            }
            return _react2.default.createElement(
                'div',
                { 'class': 'row' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'col-md-8' },
                    _react2.default.createElement(
                        'section',
                        null,
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Confirmation'
                        ),
                        _react2.default.createElement('hr', null),
                        message
                    )
                )
            );
        }
    }]);

    return ConfirmEmailPage;
}(_react2.default.Component);

ConfirmEmailPage.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = ConfirmEmailPage;