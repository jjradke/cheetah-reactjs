'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var ForgotPasswordPage = (function (_React$Component) {
    _inherits(ForgotPasswordPage, _React$Component);

    function ForgotPasswordPage(props) {
        _classCallCheck(this, ForgotPasswordPage);

        _get(Object.getPrototypeOf(ForgotPasswordPage.prototype), 'constructor', this).call(this, props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
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