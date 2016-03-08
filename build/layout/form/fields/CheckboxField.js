'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxField = function (_React$Component) {
    _inherits(CheckboxField, _React$Component);

    function CheckboxField(props) {
        _classCallCheck(this, CheckboxField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxField).call(this, props));

        _this.state = { value: props.value };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(CheckboxField, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.checked });
            this.props.onChange(event.target.checked);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            return _react2.default.createElement('input', { type: 'checkbox', id: this.props.field, name: this.props.field,
                checked: this.state.value, onChange: this.handleChange });
        }
    }]);

    return CheckboxField;
}(_react2.default.Component);

module.exports = CheckboxField;