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