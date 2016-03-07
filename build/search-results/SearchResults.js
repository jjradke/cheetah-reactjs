'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _DataStore = require('./../rest/DataStore');

var _DataStore2 = _interopRequireDefault(_DataStore);

var _Table = require('../layout/Table');

var _Table2 = _interopRequireDefault(_Table);

var _ExternalTableContainer = require('../layout/ExternalTableContainer');

var _ExternalTableContainer2 = _interopRequireDefault(_ExternalTableContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = function (_React$Component) {
    _inherits(SearchResults, _React$Component);

    function SearchResults(props) {
        _classCallCheck(this, SearchResults);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResults).call(this, props));

        _this.state = { data: { item: {} } };

        _this.generateViewLink = _this.generateViewLink.bind(_this);
        _this.viewDetail = _this.viewDetail.bind(_this);
        return _this;
    }

    _createClass(SearchResults, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.props = nextProps;
            console.log(nextProps);
            this.setState({ data: nextProps.data });
        }
    }, {
        key: 'getRouteName',
        value: function getRouteName(resourceName) {
            console.log(resourceName.substring(resourceName.length));
            if (resourceName.substring(resourceName.length - 3) != 'ies') {
                return this.props.resourceName.substring(0, this.props.resourceName.length - 1);
            } else {
                return this.props.resourceName.substring(0, this.props.resourceName.length - 3) + 'y';
            }
        }
    }, {
        key: 'viewDetail',
        value: function viewDetail(sku, index) {
            _DataStore2.default.addIndex(this.props.resourceName, index);
            this.context.router.transitionTo(this.getRouteName(this.props.resourceName), { id: encodeURIComponent(sku) });
        }
    }, {
        key: 'generateViewLink',
        value: function generateViewLink(item, i) {
            return _react2.default.createElement(
                'a',
                { onClick: this.viewDetail.bind(this, item[this.props.idField ? this.props.idField : 'Id'], i) },
                'View'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var generators = [{
                name: "View",
                func: this.generateViewLink
            }];

            this.props.columns.push({
                name: "View"
            });

            var tableContainer = _react2.default.createElement(_ExternalTableContainer2.default, { url: this.props.resourceName, columns: this.props.columns,
                generators: generators, total: this.props.total,
                data: this.state.data });
            var content = [];
            if (this.props.data.length > 0) {
                content.push(_react2.default.createElement(
                    'p',
                    null,
                    'Results'
                ));
                content.push(tableContainer);
            }
            return _react2.default.createElement(
                'div',
                null,
                content
            );
        }
    }]);

    return SearchResults;
}(_react2.default.Component);

SearchResults.contextTypes = {
    router: _react2.default.PropTypes.func
};

module.exports = SearchResults;