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