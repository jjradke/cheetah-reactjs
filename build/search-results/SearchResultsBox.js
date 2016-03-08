'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchQuery = require('./SearchQuery');

var _SearchQuery2 = _interopRequireDefault(_SearchQuery);

var _SearchResults = require('./SearchResults');

var _SearchResults2 = _interopRequireDefault(_SearchResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResultsBox = function (_React$Component) {
    _inherits(SearchResultsBox, _React$Component);

    function SearchResultsBox(props) {
        _classCallCheck(this, SearchResultsBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResultsBox).call(this, props));

        _this.state = { data: props.data };
        return _this;
    }

    _createClass(SearchResultsBox, [{
        key: 'getSearchQueryComponent',
        value: function getSearchQueryComponent() {
            return this.refs.query;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.props = nextProps;
            this.setState({ data: nextProps.data });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_SearchQuery2.default, { fields: this.props.searchFields, ref: 'query', handleSearch: this.props.handleSearch }),
                _react2.default.createElement(_SearchResults2.default, { resourceName: this.props.resourceName, columns: this.props.columns, idField: this.props.idField, data: this.state.data, total: this.props.total, ref: 'results' })
            );
        }
    }]);

    return SearchResultsBox;
}(_react2.default.Component);

module.exports = SearchResultsBox;