'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormsyField2 = require('../FormsyField');

var _FormsyField3 = _interopRequireDefault(_FormsyField2);

var _CreditCardResolver = require('./CreditCardResolver');

var _CreditCardResolver2 = _interopRequireDefault(_CreditCardResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreditCardField = function (_FormsyField) {
    _inherits(CreditCardField, _FormsyField);

    function CreditCardField(props) {
        _classCallCheck(this, CreditCardField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CreditCardField).call(this, props));

        _this.setCardNumber = function (e) {
            var targetVal = e.target.value;

            var card = _CreditCardResolver2.default.resolve(targetVal);

            if (card == null) {
                _this.setState({ cardType: null, icon: null });
            } else {
                _this.setState({ cardType: card.type, icon: card.icon });
            }

            if (_this.props.onCardChange) {
                _this.props.onCardChange(targetVal, e);
            }

            if (!e.manual) {
                _this.setValue(targetVal);
            }
            _this.setState({ cardNumber: targetVal });
        };

        _this.handleCCNumberInput = function (e) {
            var target = e.currentTarget,
                targetVal = target.value,
                charCode = String.fromCharCode(e.which),
                charCodeLen = (targetVal.replace(/\D/g, "") + charCode).length,
                card = _CreditCardResolver2.default.resolve(targetVal + charCode),
                selectionLength = target.selectionEnd - target.selectionStart,
                maxLength = 16;

            if (targetVal.replace(/ /g, '').length >= maxLength && selectionLength == 0) {
                e.preventDefault();
                e.stopPropagation();

                return;
            }

            if (_this.state.cardNumber && _this.state.cardNumber.length >= 2 && card == null) {
                e.preventDefault();
                e.stopPropagation();

                return;
            }

            if (card && (maxLength = card.length), !/^\d+$/.test(charCode) || charCodeLen > maxLength) {
                return void e.preventDefault();
            }

            var cardTest = card && "amex" === card.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/;

            return cardTest.test(targetVal) ? (e.preventDefault(), void (target.value = targetVal + " " + charCode)) : void 0;
        };

        _this.state = { cardNumber: '', cardType: '' };

        _this.styles = {
            'discover': {
                background: 'white url(images/credit-cards/discover.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'visa': {
                background: 'white url(images/credit-cards/visa.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'mastercard': {
                background: 'white url(images/credit-cards/mastercard.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'amex': {
                background: 'white url(images/credit-cards/amex.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'null': {
                backgroundColor: 'white'
            }
        };
        return _this;
    }

    _createClass(CreditCardField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setCardNumber({
                target: {
                    name: this.props.name,
                    value: this.props.value
                },
                manual: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: this.containerClassName() },
                React.createElement('input', _extends({
                    type: 'text',
                    className: this.fieldClassName(),
                    name: this.props.name,
                    autoComplete: 'off',
                    value: this.state.cardNumber,
                    autoFocus: 'true',
                    onChange: function onChange(e) {
                        return _this2.setCardNumber(e);
                    },
                    onKeyPress: function onKeyPress(e) {
                        return _this2.handleCCNumberInput(e);
                    },
                    placeholder: 'Enter card number',
                    style: this.styles[this.state.cardType]
                }, this.props)),
                React.createElement(
                    'span',
                    { className: 'form-control-message' },
                    this.errorMessage()
                )
            );
        }
    }]);

    return CreditCardField;
}(_FormsyField3.default);

module.exports = CreditCardField;