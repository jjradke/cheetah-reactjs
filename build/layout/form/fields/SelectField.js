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
            if (_this.props.multiple) {
                _this.state.value = _.pluck(object, 'value');
            } else {
                _this.state.value = value;
            }
            _this.setValue(_this.state.value);
            _this.props.onChange(_this.state.value, {
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

        _this.state = { value: props.value };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SelectField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.forceUpdate();
        }
    }, {
        key: 'getLabel',
        value: function getLabel(item) {
            return this.props.labelKey ? item[this.props.labelKey] : item.Description;
        }
    }, {
        key: 'getValueFromItem',
        value: function getValueFromItem(item) {
            return this.props.valueKey ? item[this.props.valueKey] : item.Id;
        }

        /* Multiselect component we use does not support disabling - this will disable
         the button it renders. May want to switch to a new Multiselect. Will need to
         test in Ecommerce Web Admin if so aswell.
         */

    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            var newValues = [];
            if (this.props.options) {
                for (var i = 0; i < this.props.options.length; i++) {
                    newValues.push({
                        value: this.getValueFromItem(this.props.options[i]),
                        label: this.getLabel(this.props.options[i])
                    });
                }
            }

            var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

            var errorMessage = this.getErrorMessage();

            return React.createElement(
                'div',
                { className: this.containerClassName },
                React.createElement(_reactSelect2.default, _extends({}, this.props, {
                    options: newValues,
                    value: this.state.value,
                    onChange: this.handleChange,
                    multi: this.props.multiple,
                    disabled: this.props.disabled,
                    className: this.fieldClassName()
                })),
                React.createElement(
                    'span',
                    { className: 'form-control-message' },
                    this.errorMessage()
                ),
                React.createElement('div', { className: 'clearfix' })
            );
        }
    }]);

    return SelectField;
}(_FormsyField3.default);

module.exports = SelectField;