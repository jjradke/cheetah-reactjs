'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _searchResultsSearchField = require('./../search-results/SearchField');

var _searchResultsSearchField2 = _interopRequireDefault(_searchResultsSearchField);

var _searchResultsSearchResultsContainer = require('./../search-results/SearchResultsContainer');

var _searchResultsSearchResultsContainer2 = _interopRequireDefault(_searchResultsSearchResultsContainer);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var LoginPage = (function (_React$Component) {
    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        _get(Object.getPrototypeOf(LoginPage.prototype), 'constructor', this).call(this, props);
        this.state = {};

        this.login = this.login.bind(this);
        this.facebookLogin = this.facebookLogin.bind(this);
        this.linkedinLogin = this.linkedinLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(LoginPage, _React$Component);

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
            var _this = this;

            var data = typeof provider == 'string' ? { provider: provider } : this.state;

            _securityAuthManager2['default'].login(data).subscribe(function (response) {
                _this.context.router.transitionTo('home');
            }, function (errorResponse) {});
        }
    }, {
        key: 'facebookLogin',
        value: function facebookLogin() {
            this.login('facebook');
        }
    }, {
        key: 'linkedinLogin',
        value: function linkedinLogin() {
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
            return _react2['default'].createElement(
                'div',
                { 'class': 'row' },
                _react2['default'].createElement(
                    'div',
                    { 'class': 'col-md-8' },
                    _react2['default'].createElement(
                        'section',
                        { id: 'loginForm' },
                        _react2['default'].createElement(
                            'form',
                            { 'class': 'form-horizontal', onSubmit: this.onSubmit },
                            _react2['default'].createElement(
                                'h4',
                                null,
                                'Use a local account to log in.'
                            ),
                            _react2['default'].createElement('hr', null),
                            _react2['default'].createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'class': 'col-md-2 control-label', 'for': 'email' },
                                    'Email'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { 'class': 'col-md-10' },
                                    _react2['default'].createElement('input', { type: 'text', id: 'email', onChange: this.handleChange })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'class': 'col-md-2 control-label', 'for': 'password' },
                                    'Password'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { 'class': 'col-md-10' },
                                    _react2['default'].createElement('input', { type: 'password', 'class': 'form-control', id: 'password', onChange: this.handleChange })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2['default'].createElement(
                                    'div',
                                    { 'class': 'col-md-offset-2 col-md-10' },
                                    _react2['default'].createElement(
                                        'div',
                                        { 'class': 'checkbox' },
                                        _react2['default'].createElement('input', { type: 'checkbox', id: 'rememberMe', onChange: this.handleChange }),
                                        _react2['default'].createElement(
                                            'label',
                                            { 'for': 'rememberMe' },
                                            'Remember Me'
                                        )
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { 'class': 'form-group' },
                                _react2['default'].createElement(
                                    'div',
                                    { 'class': 'col-md-offset-2 col-md-10' },
                                    _react2['default'].createElement('input', { type: 'submit', value: 'Log in', 'class': 'btn btn-default', onClick: this.login })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'p',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'forgot' },
                                'Forgot your password?'
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { 'class': 'col-md-4' },
                    _react2['default'].createElement(
                        'section',
                        { id: 'socialLoginForm' },
                        _react2['default'].createElement(
                            'button',
                            { type: 'button', onClick: this.facebookLogin },
                            'Login with Facebook'
                        ),
                        _react2['default'].createElement(
                            'button',
                            { type: 'button', onClick: this.linkedinLogin },
                            'Login with LinkedIn'
                        )
                    )
                )
            );
        }
    }]);

    return LoginPage;
})(_react2['default'].Component);

LoginPage.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = LoginPage;

// the login failed