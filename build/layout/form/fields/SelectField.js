'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _FormsyField2 = require('./FormsyField');

var _FormsyField3 = _interopRequireDefault(_FormsyField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectField = function (_FormsyField) {
    _inherits(SelectField, _FormsyField);

    function SelectField(props) {
        _classCallCheck(this, SelectField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectField).call(this, props));

        _this.handleChange = function (value, object) {
            var newValue = _this.state.value;
            if (_this.props.multiple) {
                newValue = _.pluck(object, 'value');
            } else {
                newValue = value[_this.props.valueKey] || value;
            }
            _this.setValue(newValue);
            _this.props.onChange(newValue, {
                target: {
                    name: _this.props.name
                }
            });
        };

        if (typeof props.value === 'string' && _this.props.multiple) {
            _this.state = {
                value: [props.value]
            };
        } else {
            _this.state = {
                value: props.value
            };
        }

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SelectField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (typeof props.value === 'string' && this.props.multiple) {
                this.setState({ value: [props.value] });
            } else {
                this.setState({ value: props.value });
            }
        }
    }, {
        key: 'render',


        /* Multiselect component we use does not support disabling - this will disable
         the button it renders. May want to switch to a new Multiselect. Will need to
         test in Ecommerce Web Admin if so aswell.
         */

        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_reactSelect2.default, _extends({}, this.props, {
                    options: this.props.options,
                    value: this.state.value,
                    onChange: this.handleChange,
                    multi: this.props.multiple,
                    disabled: this.props.disabled,
                    labelKey: this.props.labelKey,
                    valueKey: this.props.valueKey
                })),
                React.createElement(
                    'span',
                    { className: 'form-control-message' },
                    this.errorMessage()
                )
            );
        }
    }]);

    return SelectField;
}(_FormsyField3.default);

SelectField.defaultProps = {
    labelKey: "Description",
    valueKey: "Id"
};


module.exports = SelectField;