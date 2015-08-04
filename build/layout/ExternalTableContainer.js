'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restDataStore = require('./../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _ExternalTable = require('./ExternalTable');

var _ExternalTable2 = _interopRequireDefault(_ExternalTable);

var ExternalTableContainer = (function (_React$Component) {
    _inherits(ExternalTableContainer, _React$Component);

    function ExternalTableContainer(props) {
        _classCallCheck(this, ExternalTableContainer);

        _get(Object.getPrototypeOf(ExternalTableContainer.prototype), 'constructor', this).call(this, props);
        if (props.data) {
            this.state = { data: props.data, total: props.total };
        } else {
            this.state = { data: [] };
        }

        this.getMoreData = this.getMoreData.bind(this);
    }

    _createClass(ExternalTableContainer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.data) {
                this.setState({ data: nextProps.data });
            }
        }
    }, {
        key: 'getMoreData',
        value: function getMoreData(requestData) {
            var _this = this;

            _restDataStore2['default'].getByOffset(this.props.url, requestData).subscribe(function (val) {
                _this.setState({ data: val, total: _restDataStore2['default'].total(_this.props.url) });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.generators != null && this.state.data && this.state.data.length > 0) {
                this.props.generators.forEach(function (generator) {
                    _this2.state.data.forEach(function (data, i) {
                        data[generator.name] = generator.func.call(null, data, i);
                    });
                });
            }
            return _react2['default'].createElement(_ExternalTable2['default'], { data: this.state.data, total: this.state.total, getData: this.getMoreData, columns: this.props.columns });
        }
    }]);

    return ExternalTableContainer;
})(_react2['default'].Component);

module.exports = ExternalTableContainer;