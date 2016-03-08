'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _AuthManager = require('../security/AuthManager');

var _AuthManager2 = _interopRequireDefault(_AuthManager);

var _BasePage2 = require('../page/BasePage');

var _BasePage3 = _interopRequireDefault(_BasePage2);

var _Page = require('../page/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResetPasswordPage = function (_BasePage) {
    _inherits(ResetPasswordPage, _BasePage);

    function ResetPasswordPage(props) {
        _classCallCheck(this, ResetPasswordPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResetPasswordPage).call(this, props));

        _this.state = {
            code: props.code,
            email: props.email,
            message: 'Enter a new password.'
        };

        if (!_this.state.code || !_this.state.email) {
            _this.state.message = "An error occurred.";
        }

        _this.handleChange = _this.handleChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

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
            var _this2 = this;

            event.preventDefault();
            _AuthManager2.default.reset(this.state).subscribe(function (response) {
                _this2.succeed('Your password has successfully been reset.');
            }, function (errorResponse) {
                _this2.fail('An error has occurred with your request.');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var section;
            if (!this.isRequested()) {
                section = _react2.default.createElement(
                    'form',
                    { 'class': 'form-horizontal', onSubmit: this.submit },
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
                            this.state.email
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
                            { 'class': 'col-md-offset-2 col-md-10' },
                            _react2.default.createElement('input', { type: 'submit', value: 'Submit', 'class': 'btn btn-default' })
                        )
                    )
                );
            }
            return _react2.default.createElement(_Page2.default, { section: section, message: this.state.message, requested: this.state.requested, success: this.state.success });
        }
    }]);

    return ResetPasswordPage;
}(_BasePage3.default);

ResetPasswordPage.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = ResetPasswordPage;