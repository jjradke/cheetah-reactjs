'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapMultiselect = require('react-bootstrap-multiselect');

var _reactBootstrapMultiselect2 = _interopRequireDefault(_reactBootstrapMultiselect);

var SelectField = (function (_React$Component) {
    function SelectField(props) {
        _classCallCheck(this, SelectField);

        _get(Object.getPrototypeOf(SelectField.prototype), 'constructor', this).call(this, props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(SelectField, _React$Component);

    _createClass(SelectField, [{
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
                        return innerField.Id == field.val() || _this.state.value.map(function (f) {
                            return f.Id;
                        }).indexOf(innerField.Id) > -1;
                    });
                } else {
                    this.state.value = this.state.value.filter(function (innerField) {
                        return innerField.Id != field.val();
                    });
                }
            } else {
                this.state.value = field.val();
            }

            this.props.onChange(this.state.value);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            var newValues = [];
            if (this.props.options) {
                for (var i = 0; i < this.props.options.length; i++) {
                    newValues.push({ value: this.props.options[i].Id, label: this.props.options[i].Description,
                        selected: !this.state.value ? false : this.props.multiple ? this.state.value.map(function (value) {
                            return value.Id;
                        }).indexOf(this.props.options[i].Id) > -1 : this.state.value == this.props.options[i].Id });
                }
            }

            if (this.state.value != null && newValues.length > 0) {
                return _react2['default'].createElement(_reactBootstrapMultiselect2['default'], { data: newValues, onChange: this.handleChange, multiple: this.props.multiple });
            } else {
                return _react2['default'].createElement('div', null);
            }
        }
    }]);

    return SelectField;
})(_react2['default'].Component);

module.exports = SelectField;