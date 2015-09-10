'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var SelectField = (function (_React$Component) {
    function SelectField(props) {
        _classCallCheck(this, _SelectField);

        _get(Object.getPrototypeOf(_SelectField.prototype), 'constructor', this).call(this, props);

        if (typeof props.value === 'string' && this.props.multiple) {
            this.state = {
                value: [props.value]
            };
        } else {
            this.state = {
                value: props.value
            };
        }

        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(SelectField, _React$Component);

    var _SelectField = SelectField;

    _createClass(_SelectField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.forceUpdate();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value, object) {
            if (this.props.multiple) {
                this.state.value = _.pluck(object, 'value');
            } else {
                this.state.value = value;
            }
            this.setValue(this.state.value);
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
    }, {
        key: 'render',

        /* Multiselect component we use does not support disabling - this will disable
         the button it renders. May want to switch to a new Multiselect. Will need to
         test in Ecommerce Web Admin if so aswell.
         */

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

            return _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement(_reactSelect2['default'], _extends({}, this.props, { options: newValues, value: this.state.value, onChange: this.handleChange, multi: this.props.multiple, disabled: this.props.disabled, className: className })),
                _react2['default'].createElement(
                    'span',
                    null,
                    errorMessage
                )
            );
        }
    }]);

    SelectField = _reactMixin2['default'].decorate(_formsyReact2['default'].Mixin)(SelectField) || SelectField;
    return SelectField;
})(_react2['default'].Component);

module.exports = SelectField;