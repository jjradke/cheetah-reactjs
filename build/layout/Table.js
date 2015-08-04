'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _formatFormatterFactory = require('../format/FormatterFactory');

var _formatFormatterFactory2 = _interopRequireDefault(_formatFormatterFactory);

var _formatDateFormatter = require('../format/DateFormatter');

var _formatDateFormatter2 = _interopRequireDefault(_formatDateFormatter);

var _formatAmountFormatter = require('../format/AmountFormatter');

var _formatAmountFormatter2 = _interopRequireDefault(_formatAmountFormatter);

var _formatBooleanFormatter = require('../format/BooleanFormatter');

var _formatBooleanFormatter2 = _interopRequireDefault(_formatBooleanFormatter);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var Table = (function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

        this.state = props;
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
            var _this = this;

            // get latest value from parent on each render
            this.state.value = this.props.value;
            var columnMetadata = [],
                columns = [];

            var data = _underscore2['default'].map(this.state.data, _underscore2['default'].clone);

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
                    var formatter = _formatFormatterFactory2['default'].get(item.type);

                    data.forEach(function (row) {
                        row[item.name] = formatter.format(row[item.name]);
                    });
                }

                if (_this.props.generators != null) {
                    _this.props.generators.forEach(function (generator) {
                        data.forEach(function (data, i) {
                            data[generator.name] = generator.func.call(null, data, i);
                        });
                    });
                }

                columnMetadata.push(metadata);
                columns.push(item.name);
            });
            return _react2['default'].createElement(_griddleReact2['default'], { results: data, tableClassName: 'table', showFilter: true,
                resultsPerPage: this.props.rowsPerPage ? this.props.rowsPerPage : 10,
                showSettings: false, columns: columns, columnMetadata: columnMetadata });
        }
    }]);

    return Table;
})(_react2['default'].Component);

module.exports = Table;