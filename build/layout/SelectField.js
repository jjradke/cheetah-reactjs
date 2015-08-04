'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapMultiselect = require('react-bootstrap-multiselect');

var _reactBootstrapMultiselect2 = _interopRequireDefault(_reactBootstrapMultiselect);

var SelectField = (function (_React$Component) {
    _inherits(SelectField, _React$Component);

    function SelectField(props) {
        _classCallCheck(this, SelectField);

        _get(Object.getPrototypeOf(SelectField.prototype), 'constructor', this).call(this, props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _createClass(SelectField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.forceUpdate();
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(field, isSelected) {
            var _this = this;

            if (this.props.multiple) {
                if (isSelected) {
                    this.state.value = this.props.options.filter(function (innerField) {
                        return _this.getValueFromItem(innerField) == field.val() || _this.state.value.map(function (f) {
                            return _this.getValueFromItem(f);
                        }).indexOf(_this.getValueFromItem(innerField)) > -1;
                    });
                } else {
                    this.state.value = this.state.value.filter(function (innerField) {
                        return _this.getValueFromItem(innerField) != field.val();
                    });
                }
            } else {
                this.state.value = field.val();
            }

            this.props.onChange(this.state.value);
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            $('.multiselect', _react2['default'].findDOMNode(this).parentNode).prop('disabled', this.props.disabled);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            $('.multiselect', _react2['default'].findDOMNode(this).parentNode).prop('disabled', this.props.disabled);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // get latest value from parent on each render
            this.state.value = this.props.value;
            var newValues = [];
            if (this.props.options) {
                for (var i = 0; i < this.props.options.length; i++) {
                    newValues.push({ value: this.getValueFromItem(this.props.options[i]), label: this.getLabel(this.props.options[i]),
                        selected: !this.state.value ? false : this.props.multiple ? this.state.value.map(function (value) {
                            return _this2.getValueFromItem(value);
                        }).indexOf(this.getValueFromItem(this.props.options[i])) > -1 : this.state.value == this.getValueFromItem(this.props.options[i]) });
                }
            }

            return _react2['default'].createElement(_reactBootstrapMultiselect2['default'], { nonSelectedText: 'Choose an option', data: newValues, onChange: this.handleChange, multiple: this.props.multiple, disabled: this.props.disabled, size: '2' });
        }
    }]);

    return SelectField;
})(_react2['default'].Component);

module.exports = SelectField;