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

var RegisterPage = function (_React$Component) {
    _inherits(RegisterPage, _React$Component);

    function RegisterPage(props) {
        _classCallCheck(this, RegisterPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RegisterPage).call(this, props));

        _this.state = {
            registered: false,
            failed: false
        };

        _this.register = _this.register.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);

        _this.styles = {
            register: {
                marginTop: '10px'
            }
        };
        return _this;
    }

    _createClass(RegisterPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state[event.target.id] = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: 'register',
        value: function register(event) {
            var _this2 = this;

            event.preventDefault();
            _AuthManager2.default.register(this.state).subscribe(function (response) {
                //this.context.router.transitionTo('home');
                _this2.state.registered = true;
                _this2.setState(_this2.state);
            }, function (errorResponse) {
                // the login failed
                _this2.state.failed = true;
                _this2.setState(_this2.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var section;

            if (!this.state.registered && !this.state.failed) {
                section = _react2.default.createElement(
                    'div',
                    null,
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
                            'label',
                            { 'class': 'col-md-2 control-label', 'for': 'password' },
                            'Password'
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-md-10' },
                            _react2.default.createElement('input', { type: 'password', 'class': 'form-control', id: 'password', onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { 'class': 'col-md-2 control-label', 'for': 'password' },
                            'Confirm Password'
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-md-10' },
                            _react2.default.createElement('input', { type: 'password', 'class': 'form-control', id: 'confirmPassword', onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-offset-2 col-md-10', style: this.styles.register },
                            _react2.default.createElement('input', { type: 'submit', value: 'Register', 'class': 'btn btn-default' })
                        )
                    )
                );
            } else if (this.state.registered) {
                section = _react2.default.createElement(
                    'div',
                    null,
                    'An email has been sent to ',
                    this.state.email,
                    '.'
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
                        { id: 'registerForm' },
                        _react2.default.createElement(
                            'form',
                            { 'class': 'form-horizontal', onSubmit: this.register },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Create an account'
                            ),
                            _react2.default.createElement('hr', null),
                            section
                        )
                    )
                )
            );
        }
    }]);

    return RegisterPage;
}(_react2.default.Component);

RegisterPage.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = RegisterPage;