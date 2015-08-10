'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var SearchField = (function (_React$Component) {
    function SearchField(props) {
        _classCallCheck(this, SearchField);

        _get(Object.getPrototypeOf(SearchField.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
    }

    _inherits(SearchField, _React$Component);

    _createClass(SearchField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getValue',
        value: function getValue() {
            return _react2['default'].findDOMNode(this.refs.input).value;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement(
                    'label',
                    { htmlFor: this.props.field, className: 'control-label' },
                    this.props.label
                ),
                _react2['default'].createElement('input', { type: 'text', id: this.props.field, name: this.props.field, className: 'form-control', ref: 'input' })
            );
        }
    }]);

    return SearchField;
})(_react2['default'].Component);

module.exports = SearchField;