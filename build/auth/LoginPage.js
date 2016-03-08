'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _SearchField = require('./../search-results/SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var _SearchResultsContainer = require('./../search-results/SearchResultsContainer');

var _SearchResultsContainer2 = _interopRequireDefault(_SearchResultsContainer);

var _AuthManager = require('../security/AuthManager');

var _AuthManager2 = _interopRequireDefault(_AuthManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginPage).call(this, props));

        _this.state = {};

        _this.login = _this.login.bind(_this);
        _this.facebookLogin = _this.facebookLogin.bind(_this);
        _this.linkedinLogin = _this.linkedinLogin.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state[event.target.id] = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: 'login',
        value: function login(provider) {
            var _this2 = this;

            var data = typeof provider == 'string' ? { provider: provider } : this.state;

            _AuthManager2.default.login(data).subscribe(function (response) {
                _this2.context.router.transitionTo('home');
            }, function (errorResponse) {
                // the login failed
            });
        }
    }, {
        key: 'facebookLogin',
        value: function facebookLogin(e) {
            e.preventDefault();

            this.login('facebook');
        }
    }, {
        key: 'linkedinLogin',
        value: function linkedinLogin(e) {
            e.preventDefault();

            this.login('linkedin');
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(event) {
            event.preventDefault();
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
                            { 'class': 'form-horizontal', onSubmit: this.onSubmit },
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
                                    'div',
                                    { 'class': 'col-md-offset-2 col-md-10' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'checkbox' },
                                        _react2.default.createElement('input', { type: 'checkbox', id: 'rememberMe', onChange: this.handleChange }),
                                        _react2.default.createElement(
                                            'label',
                                            { 'for': 'rememberMe' },
                                            'Remember Me'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'col-md-offset-2 col-md-10' },
                                    _react2.default.createElement('input', { type: 'submit', value: 'Log in', 'class': 'btn btn-default', onClick: this.login })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'forgot' },
                                'Forgot your password?'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'col-md-4' },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Or, use a social media account..'
                    ),
                    _react2.default.createElement(
                        'section',
                        { id: 'socialLoginForm' },
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: this.facebookLogin },
                            _react2.default.createElement('img', { src: '../../../../images/auth/facebook-dreamstale25.png', width: '32px', height: '32px' })
                        ),
                        ' ',
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: this.linkedinLogin },
                            _react2.default.createElement('img', { src: '../../../../images/auth/linkedin-dreamstale45.png', width: '32px', height: '32px' })
                        )
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

LoginPage.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = LoginPage;