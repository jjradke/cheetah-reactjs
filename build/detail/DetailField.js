'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../layout/form/fields/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _CheckboxField = require('../layout/form/fields/CheckboxField');

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

var _SelectField = require('../layout/form/fields/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _NumberField = require('../layout/form/fields/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var labelStyle = {
    paddingRight: '5px'
};

var DetailField = function (_React$Component) {
    _inherits(DetailField, _React$Component);

    function DetailField(props) {
        _classCallCheck(this, DetailField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailField).call(this, props));

        _this.state = props;
        _this.hasInitialValue = false;
        _this.initialValue = null;

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleDateChange = _this.handleDateChange.bind(_this);
        _this.removeItem = _this.removeItem.bind(_this);
        _this.handleDropdownChange = _this.handleDropdownChange.bind(_this);
        _this.prepareValue = _this.prepareValue.bind(_this);
        return _this;
    }

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
            var _this2 = this;

            if (isSelected) {
                this.state.value = this.props.options.filter(function (innerField) {
                    return innerField.Id == field.val() || _this2.state.value.map(function (f) {
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
                this.state.moment = (0, _moment2.default)(this.state.value);
            }

            if (this.props.hide) {
                return _react2.default.createElement('span', null);
            }
            var field;
            if (this.props.type == 'text') {
                field = _react2.default.createElement(_TextField2.default, { field: this.state.field, value: this.state.value, onChange: this.handleChange });
            } else if (this.props.type == 'checkbox') {
                field = _react2.default.createElement(_CheckboxField2.default, { field: this.state.field, value: this.state.value, onChange: this.handleChange });
            } else if (this.props.type == 'list') {
                field = _react2.default.createElement(_SelectField2.default, { value: this.state.value, options: this.props.options, multiple: this.props.multiple, onChange: this.handleChange });
            } else if (this.props.type == 'number') {
                field = _react2.default.createElement(_NumberField2.default, { field: this.state.field, value: this.state.value, max: this.props.max,
                    min: this.props.min, onChange: this.handleChange });
            } else if (this.props.type == 'date') {
                field = _react2.default.createElement(_reactDatepicker2.default, {
                    key: this.state.field,
                    selected: this.state.moment,
                    onChange: this.handleDateChange,
                    placeholderText: 'Click to select a date'
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.state.field, className: 'control-label', style: labelStyle },
                    this.props.children
                ),
                field
            );
        }
    }]);

    return DetailField;
}(_react2.default.Component);

module.exports = DetailField;