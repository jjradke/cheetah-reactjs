'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _FormsyField2 = require('./FormsyField');

var _FormsyField3 = _interopRequireDefault(_FormsyField2);

var NumberField = (function (_FormsyField) {
    function NumberField(props) {
        _classCallCheck(this, NumberField);

        _get(Object.getPrototypeOf(NumberField.prototype), 'constructor', this).call(this, props);

        this.state = {
            value: props.value
        };
    }

    _inherits(NumberField, _FormsyField);

    _createClass(NumberField, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
            this.props.onChange(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            // get latest value from parent on each render
            this.state.value = this.props.value;
            return React.createElement(
                'span',
                { className: this.containerClassName() },
                React.createElement('input', { type: 'number',
                    className: this.fieldClassName(),
                    id: this.props.field,
                    max: this.props.max,
                    min: this.props.min ? this.props.min : 0,
                    name: this.props.field,
                    value: this.state.value,
                    onChange: this.handleChange }),
                ';',
                React.createElement(
                    'span',
                    { className: 'form-control-message' },
                    this.errorMessage()
                )
            );
        }
    }]);

    return NumberField;
})(_FormsyField3['default']);

module.exports = NumberField;