'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _FormsyField2 = require('./FormsyField');

var _FormsyField3 = _interopRequireDefault(_FormsyField2);

var EmailField = (function (_FormsyField) {
    function EmailField(props) {
        var _this = this;

        _classCallCheck(this, EmailField);

        _get(Object.getPrototypeOf(EmailField.prototype), 'constructor', this).call(this, props);

        this.setEmail = function (e) {
            var targetVal = e.target.value;

            var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

            if (re.test(targetVal)) {
                if (_this.props.match != null) {
                    if (_this.props.match === targetVal) {
                        _this.setState({ email: targetVal, message: '' });

                        _this.props.handleChange(targetVal, e);
                    } else {
                        _this.setState({ message: 'Must match Email field' });
                    }
                } else {
                    _this.setState({ email: targetVal, message: '' });

                    _this.props.handleChange(targetVal, e);
                }
            } else {
                _this.setState({ message: 'Invalid' });
            }
        };

        this.handleEmailInput = function (e) {
            var target = e.currentTarget,
                targetVal = target.value;

            _this.setState({ email: targetVal });

            _this.props.handleChange(targetVal);
        };

        this.state = {
            email: props.value
        };
    }

    _inherits(EmailField, _FormsyField);

    _createClass(EmailField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'span',
                { className: this.containerClassName() },
                React.createElement('input', _extends({ type: 'text',
                    onBlur: this.setEmail,
                    onChange: this.handleEmailInput,
                    value: this.state.email }, this.props, {
                    maxLength: '100' })),
                React.createElement(
                    'span',
                    { className: 'form-control-message' },
                    this.errorMessage()
                )
            );
        }
    }]);

    return EmailField;
})(_FormsyField3['default']);

module.exports = EmailField;