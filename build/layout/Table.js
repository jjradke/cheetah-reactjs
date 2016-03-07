'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _FormatterFactory = require('../format/FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

var _DateFormatter = require('../format/DateFormatter');

var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

var _AmountFormatter = require('../format/AmountFormatter');

var _AmountFormatter2 = _interopRequireDefault(_AmountFormatter);

var _BooleanFormatter = require('../format/BooleanFormatter');

var _BooleanFormatter2 = _interopRequireDefault(_BooleanFormatter);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

        _this.state = props;
        return _this;
    }

    _createClass(Table, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.state.data = nextProps.data;
            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // get latest value from parent on each render
            this.state.value = this.props.value;
            var columnMetadata = [],
                columns = [];

            var data = _underscore2.default.map(this.state.data, _underscore2.default.clone);

            this.state.columns.forEach(function (item) {
                console.log(item);
                var metadata = {
                    columnName: item.name
                };

                if (item.name.split("\.").length > 1) {
                    var itemSplit = item.name.split("\.");
                    data.forEach(function (dataItem) {
                        var temp = dataItem[itemSplit[0]];

                        if (temp != null) {
                            for (var k = 1; k < itemSplit.length; k++) {
                                temp = temp[itemSplit[k]];
                            }
                        }

                        dataItem[item.name] = temp;
                    });
                }

                if (item.label) {
                    metadata.displayName = item.label;
                }

                if (item.type) {
                    var formatter = _FormatterFactory2.default.get(item.type);

                    data.forEach(function (row) {
                        row[item.name] = formatter.format(row[item.name]);
                    });
                }

                if (_this2.props.generators != null) {
                    _this2.props.generators.forEach(function (generator) {
                        data.forEach(function (data, i) {
                            data[generator.name] = generator.func.call(null, data, i);
                        });
                    });
                }

                columnMetadata.push(metadata);
                columns.push(item.name);
            });
            return _react2.default.createElement(_griddleReact2.default, { results: data, tableClassName: 'table', showFilter: true,
                resultsPerPage: this.props.rowsPerPage ? this.props.rowsPerPage : 10,
                showSettings: false, columns: columns, columnMetadata: columnMetadata });
        }
    }]);

    return Table;
}(_react2.default.Component);

module.exports = Table;