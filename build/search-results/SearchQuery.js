'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchQuery = function (_React$Component) {
    _inherits(SearchQuery, _React$Component);

    function SearchQuery(props) {
        _classCallCheck(this, SearchQuery);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchQuery).call(this, props));

        _this.state = { data: { item: {} } };
        _this.handleSearch = _this.handleSearch.bind(_this);
        return _this;
    }

    _createClass(SearchQuery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getSearchQuery',
        value: function getSearchQuery() {
            var params = '';
            for (var key in this.refs) {
                var ref = this.refs[key];
                if (key.substring(0, 7) == 'search.') {
                    var value = ref.getValue();
                    if (value != null && value.length > 0) {
                        params += (params == '' ? '?' : '&') + key.replace('search\.', '') + '=' + value;
                    }
                }
            }
            return params;
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(event) {
            event.preventDefault();

            this.props.handleSearch();
        }
    }, {
        key: 'render',
        value: function render() {
            var searchFields = [];

            for (var i = 0; i < this.props.fields.length; i++) {
                var field = this.props.fields[i];
                field.ref = 'search.' + field.name;
                searchFields.push(_react2.default.createElement(_SearchField2.default, { field: field.name, label: field.label, ref: field.ref }));
            }

            return _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Search Fields'
                ),
                searchFields,
                _react2.default.createElement(
                    'button',
                    { type: 'submit', onClick: this.handleSearch },
                    'Search'
                )
            );
        }
    }]);

    return SearchQuery;
}(_react2.default.Component);

module.exports = SearchQuery;