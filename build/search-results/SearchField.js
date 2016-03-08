'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchField = function (_React$Component) {
    _inherits(SearchField, _React$Component);

    function SearchField(props) {
        _classCallCheck(this, SearchField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchField).call(this, props));

        _this.state = { data: { item: {} } };
        return _this;
    }

    _createClass(SearchField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getValue',
        value: function getValue() {
            return _react2.default.findDOMNode(this.refs.input).value;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: this.props.field, className: 'control-label' },
                    this.props.label
                ),
                _react2.default.createElement('input', { type: 'text', id: this.props.field, name: this.props.field, className: 'form-control', ref: 'input' })
            );
        }
    }]);

    return SearchField;
}(_react2.default.Component);

module.exports = SearchField;