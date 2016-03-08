'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _SearchResultsBox = require('./SearchResultsBox');

var _SearchResultsBox2 = _interopRequireDefault(_SearchResultsBox);

var _DataStore = require('../rest/DataStore');

var _DataStore2 = _interopRequireDefault(_DataStore);

var _AuthManager = require('../security/AuthManager');

var _AuthManager2 = _interopRequireDefault(_AuthManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResultsContainer = function (_React$Component) {
    _inherits(SearchResultsContainer, _React$Component);

    function SearchResultsContainer(props) {
        _classCallCheck(this, SearchResultsContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResultsContainer).call(this, props));

        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.state = { data: [] };
        return _this;
    }

    _createClass(SearchResultsContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (_DataStore2.default.size(this.props.resourceName) > 0) {
                this.props.total = _DataStore2.default.total(this.props.resourceName);
                _DataStore2.default.get(this.props.resourceName).subscribe(function (data) {
                    _this2.setState({ data: data });
                });
            }
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch() {
            var _this3 = this;

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

            _DataStore2.default.get(this.props.resourceName, params, true).subscribe(function (data) {
                _this3.props.total = _DataStore2.default.total(_this3.props.resourceName);
                _this3.setState({ data: data });
            }, function (error) {});
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_SearchResultsBox2.default, { resourceName: this.props.resourceName, data: this.state.data, searchFields: this.props.searchFields,
                columns: this.props.columns, ref: 'box', idField: this.props.idField, handleSearch: this.handleSearch,
                total: this.props.total });
        }
    }]);

    return SearchResultsContainer;
}(_react2.default.Component);

module.exports = SearchResultsContainer;