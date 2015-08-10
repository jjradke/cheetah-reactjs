'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _restDataStore = require('./../rest/DataStore');

var _restDataStore2 = _interopRequireDefault(_restDataStore);

var _layoutTable = require('../layout/Table');

var _layoutTable2 = _interopRequireDefault(_layoutTable);

var _layoutExternalTableContainer = require('../layout/ExternalTableContainer');

var _layoutExternalTableContainer2 = _interopRequireDefault(_layoutExternalTableContainer);

var SearchResults = (function (_React$Component) {
    function SearchResults(props) {
        _classCallCheck(this, SearchResults);

        _get(Object.getPrototypeOf(SearchResults.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };

        this.generateViewLink = this.generateViewLink.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
    }

    _inherits(SearchResults, _React$Component);

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
            _restDataStore2['default'].addIndex(this.props.resourceName, index);
            this.context.router.transitionTo(this.getRouteName(this.props.resourceName), { id: encodeURIComponent(sku) });
        }
    }, {
        key: 'generateViewLink',
        value: function generateViewLink(item, i) {
            return _react2['default'].createElement(
                'a',
                { onClick: this.viewDetail.bind(this, item[this.props.idField ? this.props.idField : 'Id'], i) },
                'View'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var generators = [{
                name: 'View',
                func: this.generateViewLink
            }];

            this.props.columns.push({
                name: 'View'
            });

            var tableContainer = _react2['default'].createElement(_layoutExternalTableContainer2['default'], { url: this.props.resourceName, columns: this.props.columns,
                generators: generators, total: this.props.total,
                data: this.state.data });
            var content = [];
            if (this.props.data.length > 0) {
                content.push(_react2['default'].createElement(
                    'p',
                    null,
                    'Results'
                ));
                content.push(tableContainer);
            }
            return _react2['default'].createElement(
                'div',
                null,
                content
            );
        }
    }]);

    return SearchResults;
})(_react2['default'].Component);

SearchResults.contextTypes = {
    router: _react2['default'].PropTypes.func
};

module.exports = SearchResults;