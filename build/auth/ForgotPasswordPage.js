'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _AuthManager = require('../security/AuthManager');

var _AuthManager2 = _interopRequireDefault(_AuthManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPasswordPage = function (_React$Component) {
    _inherits(ForgotPasswordPage, _React$Component);

    function ForgotPasswordPage(props) {
        _classCallCheck(this, ForgotPasswordPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ForgotPasswordPage).call(this, props));

        _this.state = {};

        _this.handleChange = _this.handleChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(ForgotPasswordPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state[event.target.id] = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: 'submit',
        value: function submit() {
            var _this2 = this;

            _AuthManager2.default.forgot(this.state).subscribe(function (response) {
                _this2.context.router.transitionTo('reset');
            }, function (errorResponse) {
                alert('problem');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'row' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'col-md-8' },
                    _react2.default.createElement(
                        'section',
                        { id: 'loginForm' },
                        _react2.default.createElement(
                            'form',
                            { 'class': 'form-horizontal' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Use a local account to log in.'
                            ),
                            _react2.default.createElement('hr', null),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    { 'class': 'col-md-2 control-label', 'for': 'email' },
                                    'Email'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'col-md-10' },
                                    _react2.default.createElement('input', { type: 'text', id: 'email', onChange: this.handleChange })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'col-md-offset-2 col-md-10' },
                                    _react2.default.createElement('input', { type: 'submit', value: 'Submit', 'class': 'btn btn-default', onClick: this.submit })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ForgotPasswordPage;
}(_react2.default.Component);

ForgotPasswordPage.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = ForgotPasswordPage;