'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _formatFormatterFactory = require('../format/FormatterFactory');

var _formatFormatterFactory2 = _interopRequireDefault(_formatFormatterFactory);

var ExternalTable = (function (_React$Component) {
    function ExternalTable(props) {
        _classCallCheck(this, ExternalTable);

        _get(Object.getPrototypeOf(ExternalTable.prototype), 'constructor', this).call(this, props);

        this.props = props;
        this.state = this.getInitialState();
        this.changeSort = this.changeSort.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPageSize = this.setPageSize.bind(this);

        if (this.props.data == null || this.props.data.length == 0) {
            this.props.getData({
                _size: this.state.externalResultsPerPage,
                _offset: 0
            });
        }
    }

    _inherits(ExternalTable, _React$Component);

    _createClass(ExternalTable, [{
        key: 'getInitialState',
        value: function getInitialState() {
            var initial = {
                'results': [],
                'currentPage': 0,
                'maxPages': 0,
                'externalResultsPerPage': 20,
                'externalSortColumn': null,
                'externalSortAscending': true,
                'data': this.props.data == null ? [] : this.props.data
            };

            return initial;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                maxPages: Math.ceil((this.props.total != null ? this.props.total : this.state.data.length) / this.state.externalResultsPerPage),
                results: this.state.data.slice(0, this.state.externalResultsPerPage)
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                data: nextProps.data,
                maxPages: Math.ceil((nextProps.total != null ? nextProps.total : nextProps.data.length) / this.state.externalResultsPerPage),
                results: nextProps.data.slice(0, this.state.externalResultsPerPage)
            });
        }
    }, {
        key: 'setPage',
        value: function setPage(index) {
            //This should interact with the data source to get the page at the given index
            var number = index === 0 ? 0 : index * this.state.externalResultsPerPage;

            if (this.state.data > number) {
                this.setState({
                    'results': this.state.data.slice(number, number + this.state.externalResultsPerPage > this.state.data.length ? this.state.data.length : number + this.state.externalResultsPerPage),
                    'currentPage': index
                });
            } else {
                this.props.getData({
                    _size: this.state.externalResultsPerPage,
                    _offset: number
                });

                this.setState({
                    'currentPage': index
                });
            }
        }
    }, {
        key: 'sortData',
        value: function sortData(sort, sortAscending, data) {
            //sorting should generally happen wherever the data is coming from
            var sortedData = _underscore2['default'].sortBy(data, function (item) {
                return item[sort];
            });

            if (sortAscending === false) {
                sortedData.reverse();
            }
            return {
                'currentPage': 0,
                'externalSortColumn': sort,
                'externalSortAscending': sortAscending,
                'data': sortedData,
                'results': sortedData.slice(0, this.state.externalResultsPerPage)
            };
        }
    }, {
        key: 'changeSort',
        value: function changeSort(sort, sortAscending) {
            //this should change the sort for the given column
            this.setState(this.sortData(sort, sortAscending, this.state.data));
        }
    }, {
        key: 'setFilter',
        value: function setFilter(filter) {
            //filtering should generally occur on the server (or wherever)
            //this is a lot of code for what should normally just be a method that is used to pass data back and forth
            var sortedData = this.sortData(this.state.externalSortColumn, this.state.externalSortAscending, this.state.data);

            if (filter === '') {
                this.setState(_underscore2['default'].extend(sortedData, { maxPages: Math.round(sortedData.data.length > this.state.externalResultsPerPage ? sortedData.data.length / this.state.externalResultsPerPage : 1) }));

                return;
            }

            var filteredData = _underscore2['default'].filter(sortedData.data, function (item) {
                var arr = _underscore2['default'].values(item);
                for (var i = 0; i < arr.length; i++) {
                    if ((arr[i] || '').toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        return true;
                    }
                }

                return false;
            });

            this.setState({
                data: filteredData,
                maxPages: Math.round(filteredData.length > this.state.externalResultsPerPage ? filteredData.length / this.state.externalResultsPerPage : 1),
                'results': filteredData.slice(0, this.state.externalResultsPerPage)
            });
        }
    }, {
        key: 'setPageSize',
        value: function setPageSize(size) {
            this.setState({
                currentPage: 0,
                externalResultsPerPage: size,
                maxPages: Math.round(this.state.data.length > size ? this.state.data.length / size : 1),
                results: this.state.data.slice(0, size)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var columnMetadata = [],
                columns = [];

            var data = _underscore2['default'].map(this.state.results, _underscore2['default'].clone);

            this.props.columns.forEach(function (item) {
                var metadata = {
                    columnName: item.name
                };

                if (item.name.split('.').length > 1) {
                    data.forEach(function (dataItem) {
                        var itemSplit = item.name.split('.');

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

                    if (formatter != null) {
                        data.forEach(function (row) {
                            row[item.name] = formatter.format(row[item.name]);
                        });
                    }
                }

                columnMetadata.push(metadata);
                columns.push(item.name);
            });

            return _react2['default'].createElement(_griddleReact2['default'], { useExternal: true, externalSetPage: this.setPage, columns: columns, columnMetadata: columnMetadata,
                externalChangeSort: this.changeSort, externalSetFilter: this.setFilter,
                externalSetPageSize: this.setPageSize, externalMaxPage: this.state.maxPages,
                externalCurrentPage: this.state.currentPage, results: data,
                tableClassName: 'table', resultsPerPage: this.state.externalResultsPerPage,
                externalSortColumn: this.state.externalSortColumn, externalSortAscending: this.state.externalSortAscending,
                showFilter: true, showSettings: false });
        }
    }]);

    return ExternalTable;
})(_react2['default'].Component);

exports['default'] = ExternalTable;
module.exports = exports['default'];