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

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var ConfirmEmailPage = (function (_React$Component) {
    function ConfirmEmailPage(props) {
        _classCallCheck(this, ConfirmEmailPage);

        _get(Object.getPrototypeOf(ConfirmEmailPage.prototype), 'constructor', this).call(this, props);
        this.state = {
            confirmed: false,
            failed: false
        };
    }

    _inherits(ConfirmEmailPage, _React$Component);

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
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var ForgotPasswordPage = (function (_React$Component) {
    function ForgotPasswordPage(props) {
        _classCallCheck(this, ForgotPasswordPage);

        _get(Object.getPrototypeOf(ForgotPasswordPage.prototype), 'constructor', this).call(this, props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    _inherits(ForgotPasswordPage, _React$Component);

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
            var _this = this;

            _securityAuthManager2['default'].forgot(this.state).subscribe(function (response) {
                _this.context.router.transitionTo('reset');
            }, function (errorResponse) {
                alert('problem');
            });
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
                            { 'class': 'form-horizontal' },
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
                                    'div',
                                    { 'class': 'col-md-offset-2 col-md-10' },
                                    _react2['default'].createElement('input', { type: 'submit', value: 'Submit', 'class': 'btn btn-default', onClick: this.submit })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ForgotPasswordPage;
})(_react2['default'].Component);

ForgotPasswordPage.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = ForgotPasswordPage;
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

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var RegisterPage = (function (_React$Component) {
    function RegisterPage(props) {
        _classCallCheck(this, RegisterPage);

        _get(Object.getPrototypeOf(RegisterPage.prototype), 'constructor', this).call(this, props);
        this.state = {
            registered: false,
            failed: false
        };

        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(RegisterPage, _React$Component);

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
            var _this = this;

            event.preventDefault();
            _securityAuthManager2['default'].register(this.state).subscribe(function (response) {
                //this.context.router.transitionTo('home');
                _this.state.registered = true;
                _this.setState(_this.state);
            }, function (errorResponse) {
                // the login failed
                _this.state.failed = true;
                _this.setState(_this.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var section;

            if (!this.state.registered && !this.state.failed) {
                section = _react2['default'].createElement(
                    'div',
                    null,
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
                            'label',
                            { 'class': 'col-md-2 control-label', 'for': 'password' },
                            'Confirm Password'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { 'class': 'col-md-10' },
                            _react2['default'].createElement('input', { type: 'password', 'class': 'form-control', id: 'confirmPassword', onChange: this.handleChange })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { 'class': 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { 'class': 'col-md-offset-2 col-md-10' },
                            _react2['default'].createElement('input', { type: 'submit', value: 'Register', 'class': 'btn btn-default' })
                        )
                    )
                );
            } else if (this.state.registered) {
                section = _react2['default'].createElement(
                    'div',
                    null,
                    'An email has been sent to ',
                    this.state.email,
                    '.'
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
                        { id: 'registerForm' },
                        _react2['default'].createElement(
                            'form',
                            { 'class': 'form-horizontal', onSubmit: this.register },
                            _react2['default'].createElement(
                                'h4',
                                null,
                                'Register'
                            ),
                            _react2['default'].createElement('hr', null),
                            section
                        )
                    )
                )
            );
        }
    }]);

    return RegisterPage;
})(_react2['default'].Component);

RegisterPage.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = RegisterPage;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var _pageBasePage = require('../page/BasePage');

var _pageBasePage2 = _interopRequireDefault(_pageBasePage);

var _pagePage = require('../page/Page');

var _pagePage2 = _interopRequireDefault(_pagePage);

var ResetPasswordPage = (function (_BasePage) {
    function ResetPasswordPage(props) {
        _classCallCheck(this, ResetPasswordPage);

        _get(Object.getPrototypeOf(ResetPasswordPage.prototype), 'constructor', this).call(this, props);
        this.state = {
            code: props.code,
            email: props.email,
            message: 'Enter a new password.'
        };

        if (!this.state.code || !this.state.email) {
            this.state.message = 'An error occurred.';
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    _inherits(ResetPasswordPage, _BasePage);

    _createClass(ResetPasswordPage, [{
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
        value: function submit(event) {
            var _this = this;

            event.preventDefault();
            _securityAuthManager2['default'].reset(this.state).subscribe(function (response) {
                _this.succeed('Your password has successfully been reset.');
            }, function (errorResponse) {
                _this.fail('An error has occurred with your request.');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var section;
            if (!this.isRequested()) {
                section = _react2['default'].createElement(
                    'form',
                    { 'class': 'form-horizontal', onSubmit: this.submit },
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
                            this.state.email
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
                            'label',
                            { 'class': 'col-md-2 control-label', 'for': 'password' },
                            'Confirm Password'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { 'class': 'col-md-10' },
                            _react2['default'].createElement('input', { type: 'password', 'class': 'form-control', id: 'confirmPassword', onChange: this.handleChange })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { 'class': 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { 'class': 'col-md-offset-2 col-md-10' },
                            _react2['default'].createElement('input', { type: 'submit', value: 'Submit', 'class': 'btn btn-default' })
                        )
                    )
                );
            }
            return _react2['default'].createElement(_pagePage2['default'], { section: section, message: this.state.message, requested: this.state.requested, success: this.state.success });
        }
    }]);

    return ResetPasswordPage;
})(_pageBasePage2['default']);

ResetPasswordPage.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = ResetPasswordPage;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ApplicationConfigApi = function ApplicationConfigApi() {
    _classCallCheck(this, ApplicationConfigApi);

    this.apiBasePath = 'https://localhost:44301';
};

var ApplicationConfig = new ApplicationConfigApi();

module.exports = ApplicationConfig;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DetailField = require('./DetailField');

var _DetailField2 = _interopRequireDefault(_DetailField);

var Detail = (function (_React$Component) {
    function Detail(props) {
        _classCallCheck(this, Detail);

        _get(Object.getPrototypeOf(Detail.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
    }

    _inherits(Detail, _React$Component);

    _createClass(Detail, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'detail' },
                this.props.children
            );
        }
    }]);

    return Detail;
})(_react2['default'].Component);

module.exports = Detail;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DetailHeader = require('./DetailHeader');

var _DetailHeader2 = _interopRequireDefault(_DetailHeader);

var _Detail = require('./Detail');

var _Detail2 = _interopRequireDefault(_Detail);

var DetailBox = (function (_React$Component) {
    function DetailBox(props) {
        _classCallCheck(this, DetailBox);

        _get(Object.getPrototypeOf(DetailBox.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
    }

    _inherits(DetailBox, _React$Component);

    _createClass(DetailBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'detail-box' },
                _react2['default'].createElement(_DetailHeader2['default'], { data: this.props.data }),
                _react2['default'].createElement(
                    _Detail2['default'],
                    { data: this.props.data },
                    this.props.children
                )
            );
        }
    }]);

    return DetailBox;
})(_react2['default'].Component);

module.exports = DetailBox;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _DetailBox = require('./DetailBox');

var _DetailBox2 = _interopRequireDefault(_DetailBox);

var DetailContainer = (function (_React$Component) {
    function DetailContainer(props) {
        _classCallCheck(this, DetailContainer);

        _get(Object.getPrototypeOf(DetailContainer.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
        this.data = [];
    }

    _inherits(DetailContainer, _React$Component);

    _createClass(DetailContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadFromServer();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.loadFromServer();
        }
    }, {
        key: 'loadFromServer',
        value: function loadFromServer() {
            var _this = this;

            _restRestService2['default'].get(this.props.url).subscribe(function (val) {
                _this.setState({ data: val.data });

                if (_this.props.onLoaded != null) {
                    _this.props.onLoaded.call(_this, val.data);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _DetailBox2['default'],
                { data: this.state.data },
                this.props.children
            );
        }
    }]);

    return DetailContainer;
})(_react2['default'].Component);

module.exports = DetailContainer;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layoutTextField = require('../layout/TextField');

var _layoutTextField2 = _interopRequireDefault(_layoutTextField);

var _layoutCheckboxField = require('../layout/CheckboxField');

var _layoutCheckboxField2 = _interopRequireDefault(_layoutCheckboxField);

var _layoutSelectField = require('../layout/SelectField');

var _layoutSelectField2 = _interopRequireDefault(_layoutSelectField);

var _layoutNumberField = require('../layout/NumberField');

var _layoutNumberField2 = _interopRequireDefault(_layoutNumberField);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var labelStyle = {
    paddingRight: '5px'
};

var DetailField = (function (_React$Component) {
    function DetailField(props) {
        _classCallCheck(this, DetailField);

        _get(Object.getPrototypeOf(DetailField.prototype), 'constructor', this).call(this, props);

        this.state = props;
        this.hasInitialValue = false;
        this.initialValue = null;

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.prepareValue = this.prepareValue.bind(this);
    }

    _inherits(DetailField, _React$Component);

    _createClass(DetailField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.state = nextProps;
            this.setState(this.state);
        }
    }, {
        key: 'prepareValue',
        value: function prepareValue(value) {
            if (this.props.type == 'checkbox' && (this.initialValue == 'Y' || this.initialValue == 'N')) {
                return value ? 'Y' : 'N';
            }
            return value;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.prepareValue(this.state.value);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.hasInitialValue = false;
        }
    }, {
        key: 'removeItem',
        value: function removeItem(event) {
            var roleId = $(event.target).data('roleId');
            var newValue = this.state.value;
            newValue.splice(this.state.value.map(function (object) {
                return object.Id;
            }).indexOf(roleId), 1);
            this.setState({ value: newValue });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value) {
            this.state.value = value;
            this.setState(this.state);

            if (this.props.handleChange) {
                this.props.handleChange(this.prepareValue(value));
            }
        }
    }, {
        key: 'handleDateChange',
        value: function handleDateChange(moment) {
            this.state.value = moment.toISOString();
            this.state.moment = moment;
            this.setState(this.state);

            if (this.props.handleChange) {
                this.props.handleChange(this.state.value);
            }
        }
    }, {
        key: 'handleDropdownChange',
        value: function handleDropdownChange(field, isSelected) {
            var _this = this;

            if (isSelected) {
                this.state.value = this.props.options.filter(function (innerField) {
                    return innerField.Id == field.val() || _this.state.value.map(function (f) {
                        return f.Id;
                    }).indexOf(innerField.Id) > -1;
                });
            } else {
                this.state.value = this.state.value.filter(function (innerField) {
                    return innerField.Id != field.val();
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.hasInitialValue && typeof this.props.value !== 'undefined') {
                this.hasInitialValue = true;
                this.initialValue = this.props.value;

                if (this.props.type == 'checkbox' && (this.initialValue == 'Y' || this.initialValue == 'N')) {
                    this.state.value = this.initialValue == 'Y';
                } else {
                    this.state.value = this.props.value;
                }
            }

            if (this.state.value != null) {
                this.state.moment = (0, _moment2['default'])(this.state.value);
            }

            if (this.props.hide) {
                return _react2['default'].createElement('span', null);
            }
            var field;
            if (this.props.type == 'text') {
                field = _react2['default'].createElement(_layoutTextField2['default'], { field: this.state.field, value: this.state.value, onChange: this.handleChange });
            } else if (this.props.type == 'checkbox') {
                field = _react2['default'].createElement(_layoutCheckboxField2['default'], { field: this.state.field, value: this.state.value, onChange: this.handleChange });
            } else if (this.props.type == 'list') {
                field = _react2['default'].createElement(_layoutSelectField2['default'], { value: this.state.value, options: this.props.options, multiple: this.props.multiple, onChange: this.handleChange });
            } else if (this.props.type == 'number') {
                field = _react2['default'].createElement(_layoutNumberField2['default'], { field: this.state.field, value: this.state.value, max: this.props.max,
                    min: this.props.min, onChange: this.handleChange });
            } else if (this.props.type == 'date') {
                field = _react2['default'].createElement(_reactDatepicker2['default'], {
                    key: this.state.field,
                    selected: this.state.moment,
                    onChange: this.handleDateChange,
                    placeholderText: 'Click to select a date'
                });
            }

            return _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement(
                    'label',
                    { htmlFor: this.state.field, className: 'control-label', style: labelStyle },
                    this.props.children
                ),
                field
            );
        }
    }]);

    return DetailField;
})(_react2['default'].Component);

module.exports = DetailField;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _restDataStore = require('../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _reactClassHelper = require('react-class-helper');

var DetailHeader = (function (_React$Component) {
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

    _inherits(DetailHeader, _React$Component);

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
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var DetailPage = (function (_React$Component) {
    function DetailPage(props) {
        _classCallCheck(this, DetailPage);

        _get(Object.getPrototypeOf(DetailPage.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    _inherits(DetailPage, _React$Component);

    _createClass(DetailPage, [{
        key: 'handleUpdate',
        value: function handleUpdate() {
            for (var fieldName in this.refs) {
                var fieldValue = this.refs[fieldName].getValue();

                this.state.data.item[fieldName] = fieldValue;
            }

            return this.state.data.item;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadFromServer(this.props.id);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.loadFromServer(nextProps.id);

            for (var fieldName in this.refs) {
                var fieldValue = this.refs[fieldName];

                fieldValue.reset();
            }
        }
    }, {
        key: 'loadFromServer',
        value: function loadFromServer(id) {
            var _this = this;

            _restRestService2['default'].find(this.props.resourceName, decodeURIComponent(id)).subscribe(function (data) {
                data = _this.onDataLoad(data);

                _this.setState({ data: { item: data } });
            });
        }
    }, {
        key: 'onDataLoad',
        value: function onDataLoad(data) {
            return data;
        }
    }]);

    return DetailPage;
})(_react2['default'].Component);

module.exports = DetailPage;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DetailSectionHeader = (function (_React$Component) {
    function DetailSectionHeader(props) {
        _classCallCheck(this, DetailSectionHeader);

        _get(Object.getPrototypeOf(DetailSectionHeader.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
    }

    _inherits(DetailSectionHeader, _React$Component);

    _createClass(DetailSectionHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var links = [];
            if (this.props.links != null) {
                this.props.links.forEach(function (link) {
                    if (link.node) {
                        links.push(link.node);
                    } else {
                        links.push(_react2['default'].createElement(
                            'a',
                            { href: '#', onClick: link.value },
                            link.label
                        ));
                    }
                });
            }

            return _react2['default'].createElement(
                'div',
                { className: 'section-header' },
                _react2['default'].createElement(
                    'span',
                    { className: 'section-title' },
                    this.props.children
                ),
                links
            );
        }
    }]);

    return DetailSectionHeader;
})(_react2['default'].Component);

module.exports = DetailSectionHeader;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _FormatterFactory = require('./FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var AmountFormatterApi = (function () {
    function AmountFormatterApi() {
        _classCallCheck(this, AmountFormatterApi);
    }

    _createClass(AmountFormatterApi, [{
        key: 'format',
        value: function format(value) {
            return (0, _numeral2['default'])(value).format('$0,0.00');
        }
    }]);

    return AmountFormatterApi;
})();

var AmountFormatter = new AmountFormatterApi();

_FormatterFactory2['default'].register('amount', AmountFormatter);

module.exports = AmountFormatter;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _FormatterFactory = require('./FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

var BooleanFormatterApi = (function () {
    function BooleanFormatterApi() {
        _classCallCheck(this, BooleanFormatterApi);
    }

    _createClass(BooleanFormatterApi, [{
        key: 'format',
        value: function format(value) {
            return value ? 'Yes' : 'No';
        }
    }]);

    return BooleanFormatterApi;
})();

var BooleanFormatter = new BooleanFormatterApi();

_FormatterFactory2['default'].register('boolean', BooleanFormatter);

module.exports = BooleanFormatter;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _reactTime = require('react-time');

var _reactTime2 = _interopRequireDefault(_reactTime);

var _FormatterFactory = require('./FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

var DateFormatterApi = (function () {
    function DateFormatterApi() {
        _classCallCheck(this, DateFormatterApi);
    }

    _createClass(DateFormatterApi, [{
        key: 'format',
        value: function format(value) {
            return React.createElement(_reactTime2['default'], { value: value, format: 'YYYY/MM/DD' });
        }
    }]);

    return DateFormatterApi;
})();

var DateFormatter = new DateFormatterApi();

_FormatterFactory2['default'].register('date', DateFormatter);

module.exports = DateFormatter;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FormatterFactoryApi = (function () {
    function FormatterFactoryApi() {
        _classCallCheck(this, FormatterFactoryApi);

        this.formatters = {};
    }

    _createClass(FormatterFactoryApi, [{
        key: 'register',
        value: function register(type, formatter) {
            this.formatters[type] = formatter;
        }
    }, {
        key: 'get',
        value: function get(type) {
            return this.formatters[type];
        }
    }]);

    return FormatterFactoryApi;
})();

var FormatterFactory = new FormatterFactoryApi();

module.exports = FormatterFactory;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ApplicationBody = (function (_React$Component) {
    function ApplicationBody(props) {
        _classCallCheck(this, ApplicationBody);

        _get(Object.getPrototypeOf(ApplicationBody.prototype), 'constructor', this).call(this, props);
        this.state = {};
    }

    _inherits(ApplicationBody, _React$Component);

    _createClass(ApplicationBody, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'body-content' },
                this.props.children
            );
        }
    }]);

    return ApplicationBody;
})(_react2['default'].Component);

module.exports = ApplicationBody;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ApplicationFooter = (function (_React$Component) {
    function ApplicationFooter(props) {
        _classCallCheck(this, ApplicationFooter);

        _get(Object.getPrototypeOf(ApplicationFooter.prototype), 'constructor', this).call(this, props);
        this.state = {};
    }

    _inherits(ApplicationFooter, _React$Component);

    _createClass(ApplicationFooter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('div', null);
        }
    }]);

    return ApplicationFooter;
})(_react2['default'].Component);

module.exports = ApplicationFooter;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var _reactBootstrap = require('react-bootstrap');

var navbarRightStyle = {
    paddingTop: '15px'
};

var ApplicationHeader = (function (_React$Component) {
    function ApplicationHeader(props) {
        _classCallCheck(this, ApplicationHeader);

        _get(Object.getPrototypeOf(ApplicationHeader.prototype), 'constructor', this).call(this, props);
        this.state = {};
    }

    _inherits(ApplicationHeader, _React$Component);

    _createClass(ApplicationHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var UserInfo, Pages;
            if (_securityAuthManager2['default'].isAuthenticated()) {
                Pages = _react2['default'].createElement(
                    _reactBootstrap.Nav,
                    null,
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: 'home' },
                            'Home'
                        )
                    ),
                    _react2['default'].createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'User Admin' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'users' },
                                'Users'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'security' },
                                'Roles & Permissions'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'alerts' },
                                'Alerts'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'Product Data' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'products' },
                                'Products'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'categories' },
                                'Categories'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'brands' },
                                'Brands'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'manufacturers' },
                                'Manufacturers'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'productlines' },
                                'Product Lines'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'skugroups' },
                                'Sku Groups'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'Orders, Shipping & System' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'orders' },
                                'Orders'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'shippers' },
                                'Shippers'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'controlvalues' },
                                'System Configuration'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'Promotions' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'promotions' },
                                'Promotions'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: 'giftcards' },
                                'Gift Cards'
                            )
                        )
                    )
                );
                UserInfo = _react2['default'].createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    _react2['default'].createElement(
                        'li',
                        { style: navbarRightStyle },
                        'Hello ',
                        _securityAuthManager2['default'].getUserId(),
                        '!'
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: 'logout' },
                            'Log off'
                        )
                    )
                );
            } else {
                UserInfo = _react2['default'].createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: 'login' },
                            'Login'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: 'register' },
                            'Register'
                        )
                    )
                );
                Pages = _react2['default'].createElement(_reactBootstrap.Nav, null);
            }
            return _react2['default'].createElement(
                'div',
                { className: 'application-header' },
                _react2['default'].createElement(
                    _reactBootstrap.Navbar,
                    { brand: 'Ecommerce Web Admin' },
                    Pages,
                    UserInfo
                )
            );
        }
    }]);

    return ApplicationHeader;
})(_react2['default'].Component);

module.exports = ApplicationHeader;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CheckboxField = (function (_React$Component) {
    function CheckboxField(props) {
        _classCallCheck(this, CheckboxField);

        _get(Object.getPrototypeOf(CheckboxField.prototype), 'constructor', this).call(this, props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(CheckboxField, _React$Component);

    _createClass(CheckboxField, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.checked });
            this.props.onChange(event.target.checked);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            return _react2['default'].createElement('input', { type: 'checkbox', id: this.props.field, name: this.props.field,
                checked: this.state.value, onChange: this.handleChange });
        }
    }]);

    return CheckboxField;
})(_react2['default'].Component);

module.exports = CheckboxField;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _formatFormatterFactory = require('../format/FormatterFactory');

var _formatFormatterFactory2 = _interopRequireDefault(_formatFormatterFactory);

var ExternalTable = (function (_React$Component) {
    function ExternalTable(props) {
        _classCallCheck(this, ExternalTable);

        _get(Object.getPrototypeOf(ExternalTable.prototype), 'constructor', this).call(this, props);

        this.props = props;
        this.state = this.getInitialState();
        this.changeSort = this.changeSort.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPageSize = this.setPageSize.bind(this);

        if (this.props.data == null || this.props.data.length == 0) {
            this.props.getData({
                _size: this.state.externalResultsPerPage,
                _offset: 0
            });
        }
    }

    _inherits(ExternalTable, _React$Component);

    _createClass(ExternalTable, [{
        key: 'getInitialState',
        value: function getInitialState() {
            var initial = {
                'results': [],
                'currentPage': 0,
                'maxPages': 0,
                'externalResultsPerPage': 20,
                'externalSortColumn': null,
                'externalSortAscending': true,
                'data': this.props.data == null ? [] : this.props.data
            };

            return initial;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                maxPages: Math.ceil((this.props.total != null ? this.props.total : this.state.data.length) / this.state.externalResultsPerPage),
                results: this.state.data.slice(0, this.state.externalResultsPerPage)
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                data: nextProps.data,
                maxPages: Math.ceil((nextProps.total != null ? nextProps.total : nextProps.data.length) / this.state.externalResultsPerPage),
                results: nextProps.data.slice(0, this.state.externalResultsPerPage)
            });
        }
    }, {
        key: 'setPage',
        value: function setPage(index) {
            //This should interact with the data source to get the page at the given index
            var number = index === 0 ? 0 : index * this.state.externalResultsPerPage;

            if (this.state.data > number) {
                this.setState({
                    'results': this.state.data.slice(number, number + this.state.externalResultsPerPage > this.state.data.length ? this.state.data.length : number + this.state.externalResultsPerPage),
                    'currentPage': index
                });
            } else {
                this.props.getData({
                    _size: this.state.externalResultsPerPage,
                    _offset: number
                });

                this.setState({
                    'currentPage': index
                });
            }
        }
    }, {
        key: 'sortData',
        value: function sortData(sort, sortAscending, data) {
            //sorting should generally happen wherever the data is coming from
            var sortedData = _underscore2['default'].sortBy(data, function (item) {
                return item[sort];
            });

            if (sortAscending === false) {
                sortedData.reverse();
            }
            return {
                'currentPage': 0,
                'externalSortColumn': sort,
                'externalSortAscending': sortAscending,
                'data': sortedData,
                'results': sortedData.slice(0, this.state.externalResultsPerPage)
            };
        }
    }, {
        key: 'changeSort',
        value: function changeSort(sort, sortAscending) {
            //this should change the sort for the given column
            this.setState(this.sortData(sort, sortAscending, this.state.data));
        }
    }, {
        key: 'setFilter',
        value: function setFilter(filter) {
            //filtering should generally occur on the server (or wherever)
            //this is a lot of code for what should normally just be a method that is used to pass data back and forth
            var sortedData = this.sortData(this.state.externalSortColumn, this.state.externalSortAscending, this.state.data);

            if (filter === '') {
                this.setState(_underscore2['default'].extend(sortedData, { maxPages: Math.round(sortedData.data.length > this.state.externalResultsPerPage ? sortedData.data.length / this.state.externalResultsPerPage : 1) }));

                return;
            }

            var filteredData = _underscore2['default'].filter(sortedData.data, function (item) {
                var arr = _underscore2['default'].values(item);
                for (var i = 0; i < arr.length; i++) {
                    if ((arr[i] || '').toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        return true;
                    }
                }

                return false;
            });

            this.setState({
                data: filteredData,
                maxPages: Math.round(filteredData.length > this.state.externalResultsPerPage ? filteredData.length / this.state.externalResultsPerPage : 1),
                'results': filteredData.slice(0, this.state.externalResultsPerPage)
            });
        }
    }, {
        key: 'setPageSize',
        value: function setPageSize(size) {
            this.setState({
                currentPage: 0,
                externalResultsPerPage: size,
                maxPages: Math.round(this.state.data.length > size ? this.state.data.length / size : 1),
                results: this.state.data.slice(0, size)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var columnMetadata = [],
                columns = [];

            var data = _underscore2['default'].map(this.state.results, _underscore2['default'].clone);

            this.props.columns.forEach(function (item) {
                var metadata = {
                    columnName: item.name
                };

                if (item.name.split('.').length > 1) {
                    data.forEach(function (dataItem) {
                        var itemSplit = item.name.split('.');

                        var temp = dataItem[itemSplit[0]];

                        if (temp != null) {
                            for (var k = 1; k < itemSplit.length; k++) {
                                temp = temp[itemSplit[k]];
                            }
                        }

                        dataItem[item.name] = temp;
                    });
                }

                if (item.label) {
                    metadata.displayName = item.label;
                }

                if (item.type) {
                    var formatter = _formatFormatterFactory2['default'].get(item.type);

                    if (formatter != null) {
                        data.forEach(function (row) {
                            row[item.name] = formatter.format(row[item.name]);
                        });
                    }
                }

                columnMetadata.push(metadata);
                columns.push(item.name);
            });

            return _react2['default'].createElement(_griddleReact2['default'], { useExternal: true, externalSetPage: this.setPage, columns: columns, columnMetadata: columnMetadata,
                externalChangeSort: this.changeSort, externalSetFilter: this.setFilter,
                externalSetPageSize: this.setPageSize, externalMaxPage: this.state.maxPages,
                externalCurrentPage: this.state.currentPage, results: data,
                tableClassName: 'table', resultsPerPage: this.state.externalResultsPerPage,
                externalSortColumn: this.state.externalSortColumn, externalSortAscending: this.state.externalSortAscending,
                showFilter: true, showSettings: false });
        }
    }]);

    return ExternalTable;
})(_react2['default'].Component);

module.exports = ExternalTable;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restDataStore = require('./../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _ExternalTable = require('./ExternalTable');

var _ExternalTable2 = _interopRequireDefault(_ExternalTable);

var ExternalTableContainer = (function (_React$Component) {
    function ExternalTableContainer(props) {
        _classCallCheck(this, ExternalTableContainer);

        _get(Object.getPrototypeOf(ExternalTableContainer.prototype), 'constructor', this).call(this, props);
        if (props.data) {
            this.state = { data: props.data, total: props.total };
        } else {
            this.state = { data: [] };
        }

        this.getMoreData = this.getMoreData.bind(this);
    }

    _inherits(ExternalTableContainer, _React$Component);

    _createClass(ExternalTableContainer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.data) {
                this.setState({ data: nextProps.data });
            }
        }
    }, {
        key: 'getMoreData',
        value: function getMoreData(requestData) {
            var _this = this;

            _restDataStore2['default'].getByOffset(this.props.url, requestData).subscribe(function (val) {
                _this.setState({ data: val, total: _restDataStore2['default'].total(_this.props.url) });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.generators != null && this.state.data && this.state.data.length > 0) {
                this.props.generators.forEach(function (generator) {
                    _this2.state.data.forEach(function (data, i) {
                        data[generator.name] = generator.func.call(null, data, i);
                    });
                });
            }
            return _react2['default'].createElement(_ExternalTable2['default'], { data: this.state.data, total: this.state.total, getData: this.getMoreData, columns: this.props.columns });
        }
    }]);

    return ExternalTableContainer;
})(_react2['default'].Component);

module.exports = ExternalTableContainer;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var NumberField = (function (_React$Component) {
    function NumberField(props) {
        _classCallCheck(this, NumberField);

        _get(Object.getPrototypeOf(NumberField.prototype), 'constructor', this).call(this, props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(NumberField, _React$Component);

    _createClass(NumberField, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
            this.props.onChange(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            return _react2['default'].createElement('input', { type: 'number', id: this.props.field, max: this.props.max, min: this.props.min ? this.props.min : 0,
                name: this.props.field, value: this.state.value,
                onChange: this.handleChange });
        }
    }]);

    return NumberField;
})(_react2['default'].Component);

module.exports = NumberField;
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _ExternalTableContainer = require('./ExternalTableContainer');

var _ExternalTableContainer2 = _interopRequireDefault(_ExternalTableContainer);

var _reactBootstrap = require('react-bootstrap');

var dialogStyle = {
    position: 'absolute',
    top: '20%',
    left: $(window).width() / 2 - 400,
    right: '0',
    overflow: 'overlay',
    backgroundColor: 'white',
    padding: '10px',
    width: '800px',
    zIndex: 99999
};

var SelectDialog = (function (_React$Component) {
    function SelectDialog(props) {
        _classCallCheck(this, SelectDialog);

        _get(Object.getPrototypeOf(SelectDialog.prototype), 'constructor', this).call(this, props);
        this.state = props;

        if (this.props.data) {
            this.state.mode = 'local';
        } else {
            this.state.mode = 'remote';
        }

        this.selectedItems = [];

        this.columns = this.props.columns ? this.props.columns : [{
            name: 'Checkbox',
            type: 'checkbox'
        }, {
            name: 'Id'
        }, {
            name: 'Description'
        }];

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.generateCheckbox = this.generateCheckbox.bind(this);
        this.generateRadio = this.generateRadio.bind(this);
        this.done = this.done.bind(this);
    }

    _inherits(SelectDialog, _React$Component);

    _createClass(SelectDialog, [{
        key: 'handleChange',
        value: function handleChange(field, event) {
            if (event.target.checked) {
                this.selectedItems.push(field.Id);
            } else {
                this.selectedItems.splice(this.selectedItems.indexOf(field.Id), 1);
            }
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(field) {
            this.selectedItems.push(field.Id);

            this.done();
        }
    }, {
        key: 'done',
        value: function done() {
            this.props.done(this.selectedItems);

            this.props.onRequestHide();
        }
    }, {
        key: 'generateRadio',
        value: function generateRadio(item) {
            return _react2['default'].createElement('input', { type: 'radio', onChange: this.handleSelect.bind(this, item) });
        }
    }, {
        key: 'generateCheckbox',
        value: function generateCheckbox(item) {
            return _react2['default'].createElement('input', { type: 'checkbox', onChange: this.handleChange.bind(this, item) });
        }
    }, {
        key: 'render',
        value: function render() {

            var generators = [{
                name: 'Checkbox',
                func: this.props.multiple ? this.generateSelect : this.generateRadio
            }];

            var table;
            if (this.state.mode == 'local') {
                table = _react2['default'].createElement(_Table2['default'], { data: this.state.data, columns: this.columns, generators: generators });
            } else {
                table = _react2['default'].createElement(_ExternalTableContainer2['default'], { url: this.state.resource, columns: this.columns, generators: generators });
            }

            return _react2['default'].createElement(
                _reactBootstrap.Modal,
                _extends({}, this.props, {
                    bsStyle: 'primary', title: 'Select', animation: false }),
                _react2['default'].createElement(
                    'div',
                    { className: 'modal-body' },
                    table
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'modal-footer' },
                    this.props.multiple ? _react2['default'].createElement(
                        _reactBootstrap.Button,
                        { onClick: this.done },
                        'Done'
                    ) : '',
                    _react2['default'].createElement(
                        _reactBootstrap.Button,
                        { onClick: this.props.onRequestHide },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return SelectDialog;
})(_react2['default'].Component);

module.exports = SelectDialog;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapMultiselect = require('react-bootstrap-multiselect');

var _reactBootstrapMultiselect2 = _interopRequireDefault(_reactBootstrapMultiselect);

var SelectField = (function (_React$Component) {
    function SelectField(props) {
        _classCallCheck(this, SelectField);

        _get(Object.getPrototypeOf(SelectField.prototype), 'constructor', this).call(this, props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(SelectField, _React$Component);

    _createClass(SelectField, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(field, isSelected) {
            var _this = this;

            if (this.props.multiple) {
                if (isSelected) {
                    this.state.value = this.props.options.filter(function (innerField) {
                        return innerField.Id == field.val() || _this.state.value.map(function (f) {
                            return f.Id;
                        }).indexOf(innerField.Id) > -1;
                    });
                } else {
                    this.state.value = this.state.value.filter(function (innerField) {
                        return innerField.Id != field.val();
                    });
                }
            } else {
                this.state.value = field.val();
            }

            this.props.onChange(this.state.value);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            var newValues = [];
            if (this.props.options) {
                for (var i = 0; i < this.props.options.length; i++) {
                    newValues.push({ value: this.props.options[i].Id, label: this.props.options[i].Description,
                        selected: !this.state.value ? false : this.props.multiple ? this.state.value.map(function (value) {
                            return value.Id;
                        }).indexOf(this.props.options[i].Id) > -1 : this.state.value == this.props.options[i].Id });
                }
            }

            if (this.state.value != null && newValues.length > 0) {
                return _react2['default'].createElement(_reactBootstrapMultiselect2['default'], { data: newValues, onChange: this.handleChange, multiple: this.props.multiple });
            } else {
                return _react2['default'].createElement('div', null);
            }
        }
    }]);

    return SelectField;
})(_react2['default'].Component);

module.exports = SelectField;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _formatFormatterFactory = require('../format/FormatterFactory');

var _formatFormatterFactory2 = _interopRequireDefault(_formatFormatterFactory);

var _formatDateFormatter = require('../format/DateFormatter');

var _formatDateFormatter2 = _interopRequireDefault(_formatDateFormatter);

var _formatAmountFormatter = require('../format/AmountFormatter');

var _formatAmountFormatter2 = _interopRequireDefault(_formatAmountFormatter);

var _formatBooleanFormatter = require('../format/BooleanFormatter');

var _formatBooleanFormatter2 = _interopRequireDefault(_formatBooleanFormatter);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var Table = (function (_React$Component) {
    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

        this.state = props;
    }

    _inherits(Table, _React$Component);

    _createClass(Table, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.state.data = nextProps.data;
            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            // get latest value from parent on each render
            this.state.value = this.props.value;
            var columnMetadata = [],
                columns = [];

            var data = _underscore2['default'].map(this.state.data, _underscore2['default'].clone);

            this.state.columns.forEach(function (item) {
                console.log(item);
                var metadata = {
                    columnName: item.name
                };

                if (item.name.split('.').length > 1) {
                    var itemSplit = item.name.split('.');
                    data.forEach(function (dataItem) {
                        var temp = dataItem[itemSplit[0]];

                        if (temp != null) {
                            for (var k = 1; k < itemSplit.length; k++) {
                                temp = temp[itemSplit[k]];
                            }
                        }

                        dataItem[item.name] = temp;
                    });
                }

                if (item.label) {
                    metadata.displayName = item.label;
                }

                if (item.type) {
                    var formatter = _formatFormatterFactory2['default'].get(item.type);

                    data.forEach(function (row) {
                        row[item.name] = formatter.format(row[item.name]);
                    });
                }

                if (_this.props.generators != null) {
                    _this.props.generators.forEach(function (generator) {
                        data.forEach(function (data, i) {
                            data[generator.name] = generator.func.call(null, data, i);
                        });
                    });
                }

                columnMetadata.push(metadata);
                columns.push(item.name);
            });
            return _react2['default'].createElement(_griddleReact2['default'], { results: data, tableClassName: 'table', showFilter: true,
                resultsPerPage: this.props.rowsPerPage ? this.props.rowsPerPage : 10,
                showSettings: false, columns: columns, columnMetadata: columnMetadata });
        }
    }]);

    return Table;
})(_react2['default'].Component);

module.exports = Table;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TextField = (function (_React$Component) {
    function TextField(props) {
        _classCallCheck(this, TextField);

        _get(Object.getPrototypeOf(TextField.prototype), 'constructor', this).call(this, props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(TextField, _React$Component);

    _createClass(TextField, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
            this.props.onChange(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            return _react2['default'].createElement('input', { type: 'text', id: this.props.field,
                name: this.props.field, value: this.state.value,
                onChange: this.handleChange });
        }
    }]);

    return TextField;
})(_react2['default'].Component);

module.exports = TextField;
'use strict';

module.exports = {
    ConfirmEmailPage: require('./auth/ConfirmEmailPage'),
    ForgotPasswordPage: require('./auth/ForgotPasswordPage'),
    LoginPage: require('./auth/LoginPage'),
    RegisterPage: require('./auth/RegisterPage'),
    ResetPasswordPage: require('./auth/ResetPasswordPage'),
    ApplicationConfig: require('./config/ApplicationConfig'),
    Detail: require('./detail/Detail'),
    DetailBox: require('./detail/DetailBox'),
    DetailContainer: require('./detail/DetailContainer'),
    DetailField: require('./detail/DetailField'),
    DetailHeader: require('./detail/DetailHeader'),
    DetailPage: require('./detail/DetailPage'),
    DetailSectionHeader: require('./detail/DetailSectionHeader'),
    AmountFormatter: require('./format/AmountFormatter'),
    BooleanFormatter: require('./format/BooleanFormatter'),
    DateFormatter: require('./format/DateFormatter'),
    FormatterFactory: require('./format/FormatterFactory'),
    ApplicationBody: require('./layout/ApplicationBody'),
    ApplicationFooter: require('./layout/ApplicationFooter'),
    ApplicationHeader: require('./layout/ApplicationHeader'),
    CheckboxField: require('./layout/CheckboxField'),
    ExternalTable: require('./layout/ExternalTable'),
    ExternalTableContainer: require('./layout/ExternalTableContainer'),
    NumberField: require('./layout/NumberField'),
    SelectDialog: require('./layout/SelectDialog'),
    SelectField: require('./layout/SelectField'),
    Table: require('./layout/Table'),
    TextField: require('./layout/TextField'),
    BasePage: require('./page/BasePage'),
    Page: require('./page/Page'),
    DataStore: require('./rest/DataStore'),
    RestService: require('./rest/RestService'),
    SearchField: require('./search-results/SearchField'),
    SearchQuery: require('./search-results/SearchQuery'),
    SearchResults: require('./search-results/SearchResults'),
    SearchResultsBox: require('./search-results/SearchResultsBox'),
    SearchResultsContainer: require('./search-results/SearchResultsContainer'),
    AuthManager: require('./security/AuthManager'),
    AuthService: require('./security/AuthService'),
    FacebookManager: require('./security/FacebookManager'),
    LinkedinManager: require('./security/LinkedinManager'),
    Session: require('./security/Session')
};
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var BasePage = (function (_React$Component) {
    function BasePage(props) {
        _classCallCheck(this, BasePage);

        _get(Object.getPrototypeOf(BasePage.prototype), 'constructor', this).call(this, props);

        if (!this.state) {
            this.state = {};
        }
        this.state.requested = false;
        this.state.success = false;
    }

    _inherits(BasePage, _React$Component);

    _createClass(BasePage, [{
        key: 'isSuccess',
        value: function isSuccess() {
            return this.state.requested && this.state.success;
        }
    }, {
        key: 'isRequested',
        value: function isRequested() {
            return this.state.requested;
        }
    }, {
        key: 'succeed',
        value: function succeed(message) {
            this.state.requested = true;
            this.state.success = true;
            if (!!message) this.state.message = message;
            this.setState(this.state);
        }
    }, {
        key: 'fail',
        value: function fail(message) {
            this.state.requested = true;
            this.state.success = false;
            if (!!message) this.state.message = message;
            this.setState(this.state);
        }
    }]);

    return BasePage;
})(_react2['default'].Component);

module.exports = BasePage;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Page = (function (_React$Component) {
    function Page(props) {
        _classCallCheck(this, Page);

        _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);

        this.state = {
            requested: false,
            success: false
        };
    }

    _inherits(Page, _React$Component);

    _createClass(Page, [{
        key: 'isSuccess',
        value: function isSuccess() {
            return this.state.requested && this.state.success;
        }
    }, {
        key: 'isRequested',
        value: function isRequested() {
            return this.state.requested;
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
                        null,
                        _react2['default'].createElement(
                            'h4',
                            null,
                            this.props.message
                        ),
                        _react2['default'].createElement('hr', null),
                        this.props.section
                    )
                )
            );
        }
    }]);

    return Page;
})(_react2['default'].Component);

module.exports = Page;
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

            return Rx.Observable.create(function (observer) {
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

            console.log(params);
            var offset = params._offset,
                size = params._size;
            return Rx.Observable.create(function (observer) {
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

            return Rx.Observable.create(function (observer) {
                var result = _this3.map[key] != null ? _this3.map[key].filter(function (item) {
                    if (typeof id === 'string' || typeof id === 'number') {
                        return item.Id == id;
                    } else if (typeof id === 'object') {
                        return item[id.Key] == id.Value;
                    }
                    return null;
                }) : [];
                if (result.length == 0) {
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

            return Rx.Observable.create(function (observer) {
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
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Rx = require('Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _configApplicationConfig = require('../config/ApplicationConfig');

var _configApplicationConfig2 = _interopRequireDefault(_configApplicationConfig);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var RestServiceApi = (function () {
  function RestServiceApi() {
    _classCallCheck(this, RestServiceApi);

    this.baseUrl = _configApplicationConfig2['default'].apiBasePath + '/api/';
  }

  _createClass(RestServiceApi, [{
    key: 'get',
    value: function get(resourceName, addl) {
      var url = this.baseUrl + resourceName;
      if (typeof addl === 'string') url += addl != '' ? '/' + addl : '';

      var data = {};
      if (typeof addl === 'object') data = addl;

      return _Rx2['default'].Observable.create(function (observer) {
        _jquery2['default'].get(url, data, function (result) {
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
      return _Rx2['default'].Observable.create(function (observer) {
        _jquery2['default'].get(url, function (result) {
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
      return _Rx2['default'].Observable.create(function (observer) {
        _jquery2['default'].ajax({
          url: url,
          type: 'DELETE',
          success: function success(result) {
            observer.onNext(result);
            observer.onCompleted();
          },
          error: function error(_error) {
            observer.onErorr(_error);
          }
        });
      });
    }
  }, {
    key: 'update',
    value: function update(resourceName, id, params) {
      var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
      return _Rx2['default'].Observable.create(function (observer) {
        _jquery2['default'].ajax({
          url: url,
          type: 'PUT',
          data: params,
          dataType: 'json',
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
      return _Rx2['default'].Observable.create(function (observer) {
        _jquery2['default'].post(url, params, function (result) {
          observer.onNext(result.data);
          observer.onCompleted();
        }).fail(function (error) {
          observer.onError(error);
        });
      });
    }
  }]);

  return RestServiceApi;
})();

var RestService = new RestServiceApi();

module.exports = RestService;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var SearchField = (function (_React$Component) {
    function SearchField(props) {
        _classCallCheck(this, SearchField);

        _get(Object.getPrototypeOf(SearchField.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
    }

    _inherits(SearchField, _React$Component);

    _createClass(SearchField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getValue',
        value: function getValue() {
            return _react2['default'].findDOMNode(this.refs.input).value;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement(
                    'label',
                    { htmlFor: this.props.field, className: 'control-label' },
                    this.props.label
                ),
                _react2['default'].createElement('input', { type: 'text', id: this.props.field, name: this.props.field, className: 'form-control', ref: 'input' })
            );
        }
    }]);

    return SearchField;
})(_react2['default'].Component);

module.exports = SearchField;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var SearchQuery = (function (_React$Component) {
    function SearchQuery(props) {
        _classCallCheck(this, SearchQuery);

        _get(Object.getPrototypeOf(SearchQuery.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
        this.handleSearch = this.handleSearch.bind(this);
    }

    _inherits(SearchQuery, _React$Component);

    _createClass(SearchQuery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getSearchQuery',
        value: function getSearchQuery() {
            var params = '';
            for (var key in this.refs) {
                var ref = this.refs[key];
                if (key.substring(0, 7) == 'search.') {
                    var value = ref.getValue();
                    if (value != null && value.length > 0) {
                        params += (params == '' ? '?' : '&') + key.replace('search.', '') + '=' + value;
                    }
                }
            }
            return params;
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(event) {
            event.preventDefault();

            this.props.handleSearch();
        }
    }, {
        key: 'render',
        value: function render() {
            var searchFields = [];

            for (var i = 0; i < this.props.fields.length; i++) {
                var field = this.props.fields[i];
                field.ref = 'search.' + field.name;
                searchFields.push(_react2['default'].createElement(_SearchField2['default'], { field: field.name, label: field.label, ref: field.ref }));
            }

            return _react2['default'].createElement(
                'form',
                null,
                _react2['default'].createElement(
                    'p',
                    null,
                    'Search Fields'
                ),
                searchFields,
                _react2['default'].createElement(
                    'button',
                    { type: 'submit', onClick: this.handleSearch },
                    'Search'
                )
            );
        }
    }]);

    return SearchQuery;
})(_react2['default'].Component);

module.exports = SearchQuery;
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

var _restDataStore = require('./../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _layoutTable = require('../layout/Table');

var _layoutTable2 = _interopRequireDefault(_layoutTable);

var _layoutExternalTableContainer = require('../layout/ExternalTableContainer');

var _layoutExternalTableContainer2 = _interopRequireDefault(_layoutExternalTableContainer);

var SearchResults = (function (_React$Component) {
    function SearchResults(props) {
        _classCallCheck(this, SearchResults);

        _get(Object.getPrototypeOf(SearchResults.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };

        this.generateViewLink = this.generateViewLink.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
    }

    _inherits(SearchResults, _React$Component);

    _createClass(SearchResults, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.props = nextProps;
            console.log(nextProps);
            this.setState({ data: nextProps.data });
        }
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
        key: 'viewDetail',
        value: function viewDetail(sku, index) {
            _restDataStore2['default'].addIndex(this.props.resourceName, index);
            this.context.router.transitionTo(this.getRouteName(this.props.resourceName), { id: encodeURIComponent(sku) });
        }
    }, {
        key: 'generateViewLink',
        value: function generateViewLink(item, i) {
            return _react2['default'].createElement(
                'a',
                { onClick: this.viewDetail.bind(this, item[this.props.idField ? this.props.idField : 'Id'], i) },
                'View'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var generators = [{
                name: 'View',
                func: this.generateViewLink
            }];

            this.props.columns.push({
                name: 'View'
            });

            var tableContainer = _react2['default'].createElement(_layoutExternalTableContainer2['default'], { url: this.props.resourceName, columns: this.props.columns,
                generators: generators, total: this.props.total,
                data: this.state.data });
            var content = [];
            if (this.props.data.length > 0) {
                content.push(_react2['default'].createElement(
                    'p',
                    null,
                    'Results'
                ));
                content.push(tableContainer);
            }
            return _react2['default'].createElement(
                'div',
                null,
                content
            );
        }
    }]);

    return SearchResults;
})(_react2['default'].Component);

SearchResults.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = SearchResults;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchQuery = require('./SearchQuery');

var _SearchQuery2 = _interopRequireDefault(_SearchQuery);

var _SearchResults = require('./SearchResults');

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var SearchResultsBox = (function (_React$Component) {
    function SearchResultsBox(props) {
        _classCallCheck(this, SearchResultsBox);

        _get(Object.getPrototypeOf(SearchResultsBox.prototype), 'constructor', this).call(this, props);
        this.state = { data: props.data };
    }

    _inherits(SearchResultsBox, _React$Component);

    _createClass(SearchResultsBox, [{
        key: 'getSearchQueryComponent',
        value: function getSearchQueryComponent() {
            return this.refs.query;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.props = nextProps;
            this.setState({ data: nextProps.data });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_SearchQuery2['default'], { fields: this.props.searchFields, ref: 'query', handleSearch: this.props.handleSearch }),
                _react2['default'].createElement(_SearchResults2['default'], { resourceName: this.props.resourceName, columns: this.props.columns, idField: this.props.idField, data: this.state.data, total: this.props.total, ref: 'results' })
            );
        }
    }]);

    return SearchResultsBox;
})(_react2['default'].Component);

module.exports = SearchResultsBox;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _SearchResultsBox = require('./SearchResultsBox');

var _SearchResultsBox2 = _interopRequireDefault(_SearchResultsBox);

var _restDataStore = require('../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var SearchResultsContainer = (function (_React$Component) {
    function SearchResultsContainer(props) {
        _classCallCheck(this, SearchResultsContainer);

        _get(Object.getPrototypeOf(SearchResultsContainer.prototype), 'constructor', this).call(this, props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { data: [] };
    }

    _inherits(SearchResultsContainer, _React$Component);

    _createClass(SearchResultsContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            if (_restDataStore2['default'].size(this.props.resourceName) > 0) {
                this.props.total = _restDataStore2['default'].total(this.props.resourceName);
                _restDataStore2['default'].get(this.props.resourceName).subscribe(function (data) {
                    _this.setState({ data: data });
                });
            }
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch() {
            var _this2 = this;

            var boxComponent = this.refs.box;
            var queryComponent = boxComponent.getSearchQueryComponent();
            var params = queryComponent.getSearchQuery();

            if (this.props.pageSize) {
                if (params.length == 0) {
                    params = '?_size=' + this.props.pageSize;
                } else {
                    params += '&_size=' + this.props.pageSize;
                }
            }

            _restDataStore2['default'].get(this.props.resourceName, params, true).subscribe(function (data) {
                _this2.props.total = _restDataStore2['default'].total(_this2.props.resourceName);
                _this2.setState({ data: data });
            }, function (error) {});
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_SearchResultsBox2['default'], { resourceName: this.props.resourceName, data: this.state.data, searchFields: this.props.searchFields,
                columns: this.props.columns, ref: 'box', idField: this.props.idField, handleSearch: this.handleSearch,
                total: this.props.total });
        }
    }]);

    return SearchResultsContainer;
})(_react2['default'].Component);

module.exports = SearchResultsContainer;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Rx = require('Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var _FacebookManager = require('./FacebookManager');

var _FacebookManager2 = _interopRequireDefault(_FacebookManager);

var _LinkedinManager = require('./LinkedinManager');

var _LinkedinManager2 = _interopRequireDefault(_LinkedinManager);

var _AuthService = require('./AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _lscache = require('lscache');

var _lscache2 = _interopRequireDefault(_lscache);

var AuthManagerApi = (function () {
    function AuthManagerApi() {
        _classCallCheck(this, AuthManagerApi);

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);

        if (_lscache2['default'].get('session') != null) {
            this.createSession(_lscache2['default'].get('session'));
        }
    }

    _createClass(AuthManagerApi, [{
        key: 'getUserId',
        value: function getUserId() {
            return _Session2['default'].id;
        }
    }, {
        key: 'register',
        value: function register(userInformation) {
            return _Rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].register(userInformation).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted();
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(data) {
            return _Rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].confirm(data).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted();
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            var _this = this;

            if (!!credentials.provider) {
                if (credentials.provider == 'facebook') {
                    return _Rx2['default'].Observable.create(function (observer) {
                        _FacebookManager2['default'].login().subscribe(function (facebookResponse) {
                            _AuthService2['default'].externalLogin(facebookResponse).subscribe(function (apiResponse) {
                                console.log(apiResponse);
                                _this.createSession(apiResponse);
                                observer.onNext(apiResponse);
                                observer.onCompleted();
                            });
                        });
                    });
                } else if (credentials.provider == 'linkedin') {
                    return _Rx2['default'].Observable.create(function (observer) {
                        _LinkedinManager2['default'].login().subscribe(function (linkedinResponse) {
                            _AuthService2['default'].externalLogin(linkedinResponse).subscribe(function (apiResponse) {
                                _this.createSession(apiResponse);
                                observer.onNext(apiResponse);
                                observer.onCompleted();
                            });
                        });
                    });
                }
            } else {
                return _Rx2['default'].Observable.create(function (observer) {
                    return _AuthService2['default'].login(credentials).subscribe(function (response) {
                        _this.createSession(response);
                        observer.onNext(response);
                        observer.onCompleted();
                    }, function (errorResponse) {
                        observer.onError(errorResponse);
                    });
                });
            }
        }
    }, {
        key: 'logout',
        value: function logout(clientOnly) {
            var _this2 = this;

            return _Rx2['default'].Observable.create(function (observer) {
                if (!clientOnly) {
                    _AuthService2['default'].logout().subscribe(function (response) {
                        _lscache2['default'].remove('session');
                        _this2.clearHeaders();
                        _Session2['default'].destroy();
                        observer.onNext(response);
                        observer.onCompleted();
                    }, function (errorResponse) {
                        if (errorResponse.status == 401) {
                            _lscache2['default'].remove('session');
                            _this2.clearHeaders();
                            _Session2['default'].destroy();
                            observer.onNext(null);
                            observer.onCompleted();
                        } else {
                            observer.onError(errorResponse);
                        }
                    });
                } else {
                    _lscache2['default'].remove('session');
                    _this2.clearHeaders();
                    _Session2['default'].destroy();
                    observer.onNext(null);
                    observer.onCompleted();
                }
            });
        }
    }, {
        key: 'forgot',
        value: function forgot(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].forgot(requestData).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted(response);
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
                _AuthService2['default'].reset(requestData).subscribe(function (response) {
                    observer.onNext(response);
                    observer.onCompleted(response);
                }, function (errorResponse) {
                    observer.onError(errorResponse);
                });
            });
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return _Session2['default'].isAuthenticated();
        }
    }, {
        key: 'isAuthorized',
        value: function isAuthorized(permission) {
            return _Session2['default'].isAuthorized(permission);
        }
    }, {
        key: 'createSession',
        value: function createSession(authResponse) {
            var session = {
                token: authResponse.token || authResponse.id,
                id: authResponse.userId || authResponse.id,
                roles: authResponse.roles,
                permissions: authResponse.permissions,
                landingPage: authResponse.landingPage
            };

            _lscache2['default'].set('session', session);
            this.registerHeaders(session.token, session.id);
            _Session2['default'].create(session);
        }
    }, {
        key: 'registerHeaders',
        value: function registerHeaders(token, id) {
            $.ajaxSetup({
                headers: {
                    'ecommerce-security-token': token,
                    'ecommerce-security-user': id
                }
            });
        }
    }, {
        key: 'clearHeaders',
        value: function clearHeaders() {
            $.ajaxSetup({
                headers: {}
            });
        }
    }]);

    return AuthManagerApi;
})();

var AuthManager = new AuthManagerApi();

module.exports = AuthManager;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Rx = require('Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _configApplicationConfig = require('../config/ApplicationConfig');

var _configApplicationConfig2 = _interopRequireDefault(_configApplicationConfig);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var AuthServiceApi = (function () {
    function AuthServiceApi() {
        _classCallCheck(this, AuthServiceApi);
    }

    _createClass(AuthServiceApi, [{
        key: 'register',
        value: function register(userInformation) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/Register',
                    type: 'POST',
                    data: userInformation,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(errorResult) {
                        observer.onError(errorResult);
                    }
                });
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(data) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ConfirmEmail',
                    type: 'POST',
                    data: data,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(errorResult) {
                        observer.onError(errorResult);
                    }
                });
            });
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/Login',
                    type: 'POST',
                    data: credentials,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'logout',
        value: function logout() {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/Logout',
                    type: 'POST',
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'forgot',
        value: function forgot(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ForgotPassword',
                    type: 'POST',
                    data: requestData,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset(requestData) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ResetPassword',
                    type: 'POST',
                    data: requestData,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }, {
        key: 'externalLogin',
        value: function externalLogin(request) {
            return _Rx2['default'].Observable.create(function (observer) {
                $.ajax({
                    url: _configApplicationConfig2['default'].apiBasePath + '/api/Account/ExternalLogin',
                    type: 'POST',
                    data: request,
                    success: function success(result) {
                        observer.onNext(result);
                        observer.onCompleted();
                    },
                    error: function error(result) {
                        observer.onError(result);
                    }
                });
            });
        }
    }]);

    return AuthServiceApi;
})();

var AuthService = new AuthServiceApi();

module.exports = AuthService;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Rx = require('Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var FacebookManagerApi = (function () {
    function FacebookManagerApi() {
        _classCallCheck(this, FacebookManagerApi);

        this.permissions = 'email,public_profile';
        this.status = null;
    }

    _createClass(FacebookManagerApi, [{
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            var _this = this;

            return _Rx2['default'].Observable.create(function (observer) {
                if (_this.status != null) {
                    observer.onNext(_this.status);
                    observer.onCompleted();
                } else {
                    FB.getLoginStatus(function (response) {
                        _this.status = response.status;
                        observer.onNext(_this.status);
                        observer.onCompleted();
                    });
                }
            });
        }
    }, {
        key: 'login',
        value: function login() {
            var _this2 = this;

            return _Rx2['default'].Observable.create(function (observer) {
                FB.login(function (facebookLoginResponse) {
                    console.log(facebookLoginResponse);
                    FB.api('/me', function (facebookApiResponse) {
                        var response = {
                            Email: facebookApiResponse.email,
                            FirstName: facebookApiResponse.first_name,
                            LastName: facebookApiResponse.last_name,
                            Id: facebookLoginResponse.authResponse.userID,
                            SignedRequest: facebookLoginResponse.authResponse.signedRequest,
                            Provider: 'Facebook'
                        };

                        observer.onNext(response);
                        observer.onCompleted();
                    });
                }, { scope: _this2.permissions });
            });
        }
    }]);

    return FacebookManagerApi;
})();

var FacebookManager = new FacebookManagerApi();

module.exports = FacebookManager;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var LinkedinManagerApi = (function () {
    function LinkedinManagerApi() {
        _classCallCheck(this, LinkedinManagerApi);
    }

    _createClass(LinkedinManagerApi, [{
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return Rx.Observable.create(function (observer) {
                IN.API.Raw('/people/~').result(function () {
                    observer.onNext(true);
                    observer.onCompleted();
                }).error(function () {
                    observer.onNext(false);
                    observer.onCompleted();
                });
            });
        }
    }, {
        key: 'login',
        value: function login() {
            var _this = this;

            return Rx.Observable.create(function (observer) {
                IN.User.authorize(function () {
                    IN.API.Profile('me').fields('first-name', 'last-name', 'email-address').result(function (data) {
                        data = data.values[0];

                        var response = {
                            FirstName: data['firstName'],
                            LastName: data['lastName'],
                            Email: data['emailAddress'],
                            Id: IN.User.getMemberId(),
                            Provider: 'LinkedIn'
                        };

                        observer.onNext(response);
                        observer.onCompleted();
                    });
                }, _this);
            });
        }
    }]);

    return LinkedinManagerApi;
})();

var LinkedinManager = new LinkedinManagerApi();

module.exports = LinkedinManager;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var SessionApi = (function () {
    function SessionApi() {
        _classCallCheck(this, SessionApi);

        this.id = null;
        this.token = null;
        this.roles = [];
        this.permissions = [];
        this.landingPage = null;
    }

    _createClass(SessionApi, [{
        key: 'create',
        value: function create(session) {
            for (var key in session) {
                this[key] = session[key];
            }
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return this.id != null && this.token != null && this.permissions.length > 0;
        }
    }, {
        key: 'isAuthorized',
        value: function isAuthorized(permission) {
            return this.permissions.indexOf(permission) > -1;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.id = null;
            this.token = null;
            this.roles = [];
            this.permissions = [];
            this.landingPage = null;
        }
    }]);

    return SessionApi;
})();

var Session = new SessionApi();

module.exports = Session;
