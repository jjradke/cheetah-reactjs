'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _SearchResultsBox = require('./SearchResultsBox');

var _SearchResultsBox2 = _interopRequireDefault(_SearchResultsBox);

var _restDataStore = require('../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _securityAuthManager = require('../security/AuthManager');

var _securityAuthManager2 = _interopRequireDefault(_securityAuthManager);

var SearchResultsContainer = (function (_React$Component) {
    _inherits(SearchResultsContainer, _React$Component);

    function SearchResultsContainer(props) {
        _classCallCheck(this, SearchResultsContainer);

        _get(Object.getPrototypeOf(SearchResultsContainer.prototype), 'constructor', this).call(this, props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { data: [] };
    }

    _createClass(SearchResultsContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            if (_restDataStore2['default'].size(this.props.resourceName) > 0) {
                this.props.total = _restDataStore2['default'].total(this.props.resourceName);
                _restDataStore2['default'].get(this.props.resourceName).subscribe(function (data) {
                    _this.setState({ data: data });
                });
            }
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch() {
            var _this2 = this;

            var boxComponent = this.refs.box;
            var queryComponent = boxComponent.getSearchQueryComponent();
            var params = queryComponent.getSearchQuery();

            if (this.props.pageSize) {
                if (params.length == 0) {
                    params = '?_size=' + this.props.pageSize;
                } else {
                    params += '&_size=' + this.props.pageSize;
                }
            }

            _restDataStore2['default'].get(this.props.resourceName, params, true).subscribe(function (data) {
                _this2.props.total = _restDataStore2['default'].total(_this2.props.resourceName);
                _this2.setState({ data: data });
            }, function (error) {});
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_SearchResultsBox2['default'], { resourceName: this.props.resourceName, data: this.state.data, searchFields: this.props.searchFields,
                columns: this.props.columns, ref: 'box', idField: this.props.idField, handleSearch: this.handleSearch,
                total: this.props.total });
        }
    }]);

    return SearchResultsContainer;
})(_react2['default'].Component);

module.exports = SearchResultsContainer;