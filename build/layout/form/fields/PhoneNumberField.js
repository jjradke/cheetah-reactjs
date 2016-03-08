'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormsyField2 = require('./FormsyField');

var _FormsyField3 = _interopRequireDefault(_FormsyField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneNumberField = function (_FormsyField) {
    _inherits(PhoneNumberField, _FormsyField);

    function PhoneNumberField(props) {
        _classCallCheck(this, PhoneNumberField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhoneNumberField).call(this, props));

        _this.handleKeyUp = function (e) {
            _this.state.wasBackspace = e.which === 8; // used to display the state properly
            // if user backspaces on something, we may
            // need to hide one of the format characters
            // as well
        };

        _this.formatNumber = function (number) {
            if (number == null) {
                return '';
            }

            var targetValNoSpecialChars = number.replace(/[\(\)\- ]/g, '');

            var outputFormat = '($1) $2-$3';

            if (targetValNoSpecialChars.length <= 2 || targetValNoSpecialChars.length == 3 && _this.state.wasBackspace) {
                outputFormat = '($1';
            } else if (targetValNoSpecialChars.length <= 5 || targetValNoSpecialChars.length == 6 && _this.state.wasBackspace) {
                outputFormat = '($1) $2';
            } else if (targetValNoSpecialChars.length > 5) {
                outputFormat = '($1) $2-$3';
            }

            return targetValNoSpecialChars.replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/, outputFormat);
        };

        _this.setPhoneNumber = function (e) {
            e.target.value = _this.formatNumber(e.target.value);

            if (_this.props.onChange) {
                _this.props.onChange(e.target.value, e);
            }
            _this.setValue(e.target.value);
            _this.setState({ phoneNumber: e.target.value, wasBackspace: false });
        };

        _this.handleNumberInput = function (e) {
            var target = e.currentTarget,
                targetVal = target.value.replace(/[\(\)\- ]/g, ''),
                charCode = String.fromCharCode(e.which),
                maxLength = 10,
                selectedLength = target.selectionEnd - target.selectionStart;
            // don't add non-numbers and limit it to 10 numbers
            if (parseInt(charCode) === NaN || targetVal.length >= maxLength && selectedLength == 0) {

                e.preventDefault();
                e.stopPropagation();
            }
        };

        _this.state = {
            phoneNumber: _this.formatNumber(props.value)
        };
        return _this;
    }

    _createClass(PhoneNumberField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.containerClassName() },
                React.createElement('input', _extends({}, this.props, {
                    type: 'text',
                    name: this.props.name,
                    className: this.fieldClassName(),
                    autoComplete: 'off',
                    value: this.state.phoneNumber,
                    disabled: this.props.disabled,
                    onChange: this.setPhoneNumber,
                    onKeyUp: this.handleKeyUp,
                    onKeyPress: this.handleNumberInput,
                    placeholder: 'Enter phone number'
                })),
                React.createElement(
                    'span',
                    { className: 'form-control-message' },
                    this.errorMessage()
                )
            );
        }
    }]);

    return PhoneNumberField;
}(_FormsyField3.default);

module.exports = PhoneNumberField;