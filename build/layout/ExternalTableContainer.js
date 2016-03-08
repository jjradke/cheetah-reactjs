'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DataStore = require('./../rest/DataStore');

var _DataStore2 = _interopRequireDefault(_DataStore);

var _ExternalTable = require('./ExternalTable');

var _ExternalTable2 = _interopRequireDefault(_ExternalTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExternalTableContainer = function (_React$Component) {
    _inherits(ExternalTableContainer, _React$Component);

    function ExternalTableContainer(props) {
        _classCallCheck(this, ExternalTableContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExternalTableContainer).call(this, props));

        if (props.data) {
            _this.state = { data: props.data, total: props.total };
        } else {
            _this.state = { data: [] };
        }

        _this.getMoreData = _this.getMoreData.bind(_this);
        return _this;
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
            var _this2 = this;

            _DataStore2.default.getByOffset(this.props.url, requestData).subscribe(function (val) {
                _this2.setState({ data: val, total: _DataStore2.default.total(_this2.props.url) });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.props.generators != null && this.state.data && this.state.data.length > 0) {
                this.props.generators.forEach(function (generator) {
                    _this3.state.data.forEach(function (data, i) {
                        data[generator.name] = generator.func.call(null, data, i);
                    });
                });
            }
            return _react2.default.createElement(_ExternalTable2.default, { data: this.state.data, total: this.state.total, getData: this.getMoreData, columns: this.props.columns });
        }
    }]);

    return ExternalTableContainer;
}(_react2.default.Component);

module.exports = ExternalTableContainer;